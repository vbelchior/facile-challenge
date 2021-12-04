import { EncriptModel } from './encript.model';
import { EncriptService } from './encript.service';
export declare class EncriptsController {
    private encriptService;
    constructor(encriptService: EncriptService);
    retrieve(id: number): Promise<EncriptModel>;
    filter(name?: string): Promise<EncriptModel[]>;
}
