export type Environment = "dev" | "local";
export type LogLevel = "error" | "warn" | "info" | "http" | "debug";

export interface Config {
  serviceName: string;
  environment: Environment;
  port: number;
  logLevel: LogLevel;
}

export interface ProcessVariables {
  SERVICE_NAME: string;
  ENV: Environment;
  PORT: number;
  LOG_LEVEL: LogLevel;
}