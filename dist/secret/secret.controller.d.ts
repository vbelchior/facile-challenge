import { EncriptService } from './encript.service';
import { SecretModel } from './secret.model';
import { SecretService } from './secret.service';
export declare class SecretController {
    private encriptService;
    private secretService;
    constructor(encriptService: EncriptService, secretService: SecretService);
    create(secret: SecretModel): Promise<SecretModel>;
    retrieve(id: number): Promise<SecretModel>;
    filter(name?: string): Promise<SecretModel[]>;
}
