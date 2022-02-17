export enum TransferType {
    eft,
    transfer,
    fast
}

export function transferMoney(options: {
    accountId: string;
    transferType: number;
    toIban: string;
    price: number;
}): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 2500);
    });
}
