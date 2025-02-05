import { type Config } from '../types';
export declare class SandboxServer {
    static nextPort(): Promise<number>;
    static lockfilePath(filename: string): string;
    static randomHomeDir(): string;
    static init(config: Config): Promise<SandboxServer>;
    private static lastPort;
    private static binPath;
    private subprocess;
    private readyToDie;
    private readonly config;
    private constructor();
    get homeDir(): string;
    get port(): number;
    get rpcAddr(): string;
    start(): Promise<SandboxServer>;
    close(): Promise<void>;
    private spawn;
}
//# sourceMappingURL=server.d.ts.map