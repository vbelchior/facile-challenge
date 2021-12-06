import { Cipher, createCipheriv, createDecipheriv, randomBytes } from "crypto";
import { Observable, of } from "rxjs";
const ALGORITHM: string = "aes-256-ctr";
const IV_LENGTH: number = 16;

export const encrypt = (text: string): Observable<string> => {
  const iv = randomBytes(IV_LENGTH);
  const cipher: Cipher = createCipheriv(ALGORITHM, Key(), iv);
  let encryptedData = cipher.update(text, "utf-8", "hex") + cipher.final("hex");
  return of(`${iv.toString("hex")}:${encryptedData}`);
};

export const decrypt = (text: string): Observable<string> => {
  const textParts = text.split(":");
  const iv = Buffer.from(textParts.shift(), "hex");
  const encryptedText = textParts.join(":");
  const decipher: Cipher = createDecipheriv(ALGORITHM, Key(), iv);
  let decryptedData =
    decipher.update(encryptedText, "hex", "utf-8") + decipher.final("utf8");

  return of(decryptedData);
};
function Key(): Buffer {
  return Buffer.from(process.env.ENCRYPT_KEY);
}
