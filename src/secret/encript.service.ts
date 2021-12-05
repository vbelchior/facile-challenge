import { Cipher, createCipheriv, createDecipheriv, randomBytes } from "crypto";

import { Injectable } from "@nestjs/common";
import { Observable, of } from "rxjs";

@Injectable()
export class EncriptService {
  private static readonly algorithm: string = "aes-256-cbc";
  private static readonly randomKey: Buffer = randomBytes(32);
  private static readonly initVector: Buffer = randomBytes(16);

  public encript(text: string): Observable<string> {
    const cipher: Cipher = createCipheriv(
      EncriptService.algorithm,
      EncriptService.randomKey,
      EncriptService.initVector
    );

    let encryptedData = cipher.update(text, "utf-8", "hex");
    encryptedData += cipher.final("hex");

    return of(encryptedData);
  }

  public decrypt(text: string): Observable<string> {
    const decipher: Cipher = createDecipheriv(
      EncriptService.algorithm,
      EncriptService.randomKey,
      EncriptService.initVector
    );

    let decryptedData = decipher.update(text, "hex", "utf-8");
    decryptedData += decipher.final("utf8");

    return of(decryptedData);
  }
}
