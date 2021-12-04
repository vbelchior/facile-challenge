import { Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { EncriptModel } from './encript.model';
export declare class EncriptService {
    private encriptRepository;
    constructor(encriptRepository: Repository<EncriptModel>);
    retrieve(id: number): Observable<EncriptModel>;
    filter(nameLike?: string): Observable<EncriptModel[]>;
}
