declare enum Env {
    Dev = "dev",
    Local = "local",
    Stage = "stage",
    Prod = "prod"
}
declare enum NodeEnv {
    Test = "test",
    Production = "production",
    Development = "development"
}
declare const isDev: boolean;
declare const isLocal: boolean;
declare const isStage: boolean;
declare const isProd: boolean;
declare const isNodeEnvDev: boolean;
declare const isNodeEnvTest: boolean;
declare const isNodeEnvProd: boolean;

declare const environment: <T extends Record<string, unknown>>(types: T) => T;

export { Env, NodeEnv, environment, isDev, isLocal, isNodeEnvDev, isNodeEnvProd, isNodeEnvTest, isProd, isStage };
