import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { ROLES_KEY } from './roles.decorator';
import { IS_PUBLIC_KEY } from './public.decorator';
import { Role } from './roles.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector, private readonly jwt: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // Allow publicly marked routes
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) return true;

    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    // If no roles required, allow
    if (!requiredRoles || requiredRoles.length === 0) return true;

    const req = context.switchToHttp().getRequest<any>();
    let user = req.user as { roles?: Role[]; role?: Role } | undefined;

    // If JwtAuthGuard hasn't populated req.user yet (because global guards run first),
    // lazily decode the JWT here to evaluate roles.
    if (!user) {
      const authHeader: string | undefined = req.headers['authorization'] || req.headers['Authorization'];
      if (typeof authHeader === 'string') {
        const [scheme, token] = authHeader.split(' ');
        if (scheme === 'Bearer' && token) {
          try {
            user = (await this.jwt.verifyAsync(token)) as any;
          } catch {
            // ignore; user stays undefined and will fail role check below
          }
        }
      }
    }

    // Read roles from array or single role string; default to empty
    const userRoles: Role[] = Array.isArray(user?.roles)
      ? (user?.roles as Role[])
      : user?.role
      ? [user.role]
      : [];

    const has = requiredRoles.some((r) => userRoles.includes(r));
    if (!has) throw new ForbiddenException('Insufficient role');
    return true;
  }
}
