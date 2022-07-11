import { createTerminus } from "@godaddy/terminus";
import { config, isLocalEnv } from "../config";
import Logger from "../libs/logger";

function onSignal() {
	Logger.info('server is starting cleanup');
	return Promise.all([
		// your clean logic, like closing database connections
	]);
}

function healthCheck({ state }: any) {
	Logger.info(`is service up? ${!state.isShuttingDown}`);
	return Promise.resolve({
		status: "ok",
		serviceName: config.serviceName,
	});
}

const options = {
	healthChecks: {
		'/healthcheck': healthCheck,                 // a function accepting a state and returning a promise indicating service health,
		verbatim: isLocalEnv,                        // [optional = false] use object returned from /healthcheck verbatim in response,
		__unsafeExposeStackTraces: isLocalEnv        // [optional = false] return stack traces in error response if healthchecks throw errors
	},
	caseInsensitive: false,                        // [optional] whether given health checks routes are case insensitive (defaults to false)
	statusOk: 200,                                 // [optional = 200] status to be returned for successful healthchecks
	statusError: 503,                              // [optional = 503] status to be returned for unsuccessful healthchecks

	// cleanup options             
	timeout: 1000,                                 // [optional = 1000] number of milliseconds before forceful exiting
	signal: 'SIGTERM',                             // [optional = 'SIGTERM'] what signal to listen for relative to shutdown
	useExit0: false,                               // [optional = false] instead of sending the received signal again without beeing catched, the process will exit(0)
	sendFailuresDuringShutdown: true,              // [optional = true] whether or not to send failure (503) during shutdown
	// beforeShutdown,                             // [optional] called before the HTTP server starts its shutdown
	onSignal,                                      // [optional] cleanup function, returning a promise (used to be onSigterm)
	// onShutdown,                                 // [optional] called right before exiting
	// onSendFailureDuringShutdown,                // [optional] called before sending each 503 during shutdowns
	// logger                                      // [optional] logger function to be called with errors. Example logger call: ('error happened during shutdown', error). See terminus.js for more details.
};

export default {
	createTerminus,
	options
}