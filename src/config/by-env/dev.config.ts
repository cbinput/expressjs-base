import {
	Config,
	ProcessVariables
} from "../config.type";
  
export function getDevelopmentConfig(processVariables: ProcessVariables): Config {
	return {
		serviceName: processVariables.SERVICE_NAME,
		environment: processVariables.ENV,
		port: processVariables.PORT,
		logLevel: processVariables.LOG_LEVEL,
	};
}