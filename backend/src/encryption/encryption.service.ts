import { Injectable } from '@nestjs/common';
import { createCipheriv, createDecipheriv, createHash, randomBytes } from 'crypto';

@Injectable()
export class EncryptionService {
  private deriveKey(secret: string): Buffer {
    // Derive a 32-byte key using SHA-256 of the secret
    return createHash('sha256').update(secret, 'utf8').digest();
  }

  encrypt(plaintext: string, secret: string) {
    const key = this.deriveKey(secret);
    const iv = randomBytes(12); // AES-GCM 96-bit IV
    const cipher = createCipheriv('aes-256-gcm', key, iv);
    const ciphertext = Buffer.concat([cipher.update(plaintext, 'utf8'), cipher.final()]);
    const authTag = cipher.getAuthTag();

    return {
      ciphertext: ciphertext.toString('base64'),
      iv: iv.toString('base64'),
      authTag: authTag.toString('base64'),
    };
  }

  decrypt(ciphertextB64: string, ivB64: string, authTagB64: string, secret: string) {
    const key = this.deriveKey(secret);
    const iv = Buffer.from(ivB64, 'base64');
    const authTag = Buffer.from(authTagB64, 'base64');
    const decipher = createDecipheriv('aes-256-gcm', key, iv);
    decipher.setAuthTag(authTag);
    const plaintext = Buffer.concat([
      decipher.update(Buffer.from(ciphertextB64, 'base64')),
      decipher.final(),
    ]);
    return plaintext.toString('utf8');
  }
}
