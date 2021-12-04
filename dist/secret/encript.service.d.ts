import { Observable } from 'rxjs';
export declare class EncriptService {
    private static readonly algorithm;
    private static randomKey;
    private static initVector;
    encript(text: string): Observable<string>;
    decrypt(text: any): Observable<string>;
}
