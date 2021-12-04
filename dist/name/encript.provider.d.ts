export declare const encriptProviders: {
    provide: string;
    useFactory: () => Promise<import("typeorm").Connection>;
}[];
