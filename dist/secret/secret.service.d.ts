import { Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { SecretModel } from './secret.model';
export declare class SecretService {
    private secretRepository;
    constructor(secretRepository: Repository<SecretModel>);
    create(entity: SecretModel): Observable<SecretModel>;
    retrieve(id: number): Observable<SecretModel>;
    filter(nameLike?: string): Observable<SecretModel[]>;
}
