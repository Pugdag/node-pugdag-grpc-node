import { Client } from '@pugdag/grpc';
import { IRPC, RPC as Rpc } from '../types/custom-types';
export { Client };
export declare class RPC implements IRPC {
    client: Client;
    constructor(options?: any);
    onConnect(callback: Function): void;
    onConnectFailure(callback: Function): void;
    onError(callback: Function): void;
    onDisconnect(callback: Function): void;
    disconnect(): void;
    connect(): Promise<unknown>;
    unSubscribe(method: string, uid?: string): void;
    subscribe<T, R>(method: string, data: any, callback: Rpc.callback<R>): Rpc.SubPromise<T_1>;
    request<T>(method: string, data: any): Promise<T>;
    subscribeChainChanged(callback: Rpc.callback<Rpc.ChainChangedNotification>): Rpc.SubPromise<T>;
    subscribeBlockAdded(callback: Rpc.callback<Rpc.BlockAddedNotification>): Rpc.SubPromise<T>;
    subscribeVirtualSelectedParentBlueScoreChanged(callback: Rpc.callback<Rpc.VirtualSelectedParentBlueScoreChangedNotification>): Rpc.SubPromise<T>;
    subscribeUtxosChanged(addresses: string[], callback: Rpc.callback<Rpc.UtxosChangedNotification>): Rpc.SubPromise<T>;
    unSubscribeUtxosChanged(uid?: string): void;
    getBlock(hash: string, includeTransactions?: boolean): Promise<Rpc.BlockResponse>;
    getTransactionsByAddresses(startingBlockHash: string, addresses: string[]): Promise<Rpc.TransactionsByAddressesResponse>;
    getUtxosByAddresses(addresses: string[]): Promise<Rpc.UTXOsByAddressesResponse>;
    submitTransaction(tx: Rpc.SubmitTransactionRequest): Promise<Rpc.SubmitTransactionResponse>;
    getVirtualSelectedParentBlueScore(): Promise<Rpc.VirtualSelectedParentBlueScoreResponse>;
    getBlockDagInfo(): Promise<Rpc.GetBlockDagInfoResponse>;
    subscribeVirtualDaaScoreChanged(callback: Rpc.callback<Rpc.VirtualDaaScoreChangedNotification>): Rpc.SubPromise<T>;
}
//# sourceMappingURL=rpc.d.ts.map