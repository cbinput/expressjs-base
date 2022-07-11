import { ProcessVariables, Config } from "./config.type";
import { getConfig } from "./by-env";

export const config: Config = getConfig(process.env as unknown as ProcessVariables);

export const isLocalEnv = config.environment === "local";
export const isDevEnv = config.environment === "dev";