import { Observable } from 'rxjs';
export declare class HashService {
    private static iv;
    private static readonly password;
    private static readonly algorithm;
    encript(text: string): Promise<Observable<string>>;
}
