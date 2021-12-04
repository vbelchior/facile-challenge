import { Connection } from 'typeorm';
import { EncriptModel } from './encript.model';
export declare const encriptProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<EncriptModel>;
    inject: string[];
}[];
