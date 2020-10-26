export declare interface InstallReferrerResponse {
    appInstallTime: number;
    instantExperienceLaunched: boolean;
    referrerClickTime: number;
    referrerUrl: string;
}

export declare class InstallReferrer {
    isOpen(succes): 0 | 1;
    open(succes?, error?): void;
    getParams(succes, error): InstallReferrerResponse;
    close(succes, error): void;
}
