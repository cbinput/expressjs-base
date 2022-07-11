import { Config, ProcessVariables } from "../config.type";
import { getDevelopmentConfig } from "./dev.config";
import { getLocalConfig } from "./local.config";

export function getConfig(processVariables: ProcessVariables): Config {
  let appVariables;
  switch (processVariables.ENV) {
    case "dev":
      console.debug("setting config with development environment variables");
      appVariables = getDevelopmentConfig(processVariables);
    case "local":
      console.debug("setting config with local environment variables");
      appVariables = getLocalConfig(processVariables);
  }
  console.debug("app variables", appVariables);
  return appVariables;
}