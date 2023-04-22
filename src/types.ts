export enum Env {
    Dev = 'dev',
    Local = 'local',
    Stage = 'stage',
    Prod = 'prod',
}

export enum NodeEnv {
    Test = 'test',
    Production = 'production',
    Development = 'development',
}


// В каком окружении запускается код
export const isDev = process.env.ENVIRONMENT === Env.Dev;
export const isLocal = process.env.ENVIRONMENT === Env.Local;
export const isStage = process.env.ENVIRONMENT === Env.Stage;
export const isProd = process.env.ENVIRONMENT === Env.Prod;

// В каком режиме собирается код
export const isNodeEnvDev = process.env.NODE_ENV === NodeEnv.Development;
export const isNodeEnvTest = process.env.NODE_ENV === NodeEnv.Test;
export const isNodeEnvProd = process.env.NODE_ENV === NodeEnv.Production;