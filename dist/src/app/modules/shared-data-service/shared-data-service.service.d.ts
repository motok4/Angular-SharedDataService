export declare class SharedDataService {
    chanels: Map<any, any>;
    observable: Map<any, any>;
    constructor();
    verifyChannel(label: any): void;
    publish(label: any, mensagem: any): void;
    subscribe(label: any, callback: any): void;
}
