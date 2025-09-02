import { IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class VerifyCredentialDto {
  @IsMongoId()
  scribeId!: string;

  @IsString()
  @IsNotEmpty()
  type!: string; // e.g., 'expertise', 'kyc', etc.

  @IsString()
  @IsNotEmpty()
  issuer!: string; // e.g., 'SonicDAO'

  @IsString()
  @IsNotEmpty()
  proof!: string; // opaque proof string or tx hash

  @IsString()
  @IsOptional()
  nftTokenId?: string;
}
