import { app } from "./app";
import HealthCheck from "./libs/health-check";

const port = app.get("port");
const bind = `Port ${port}`;
const server = app.listen(port, onListening);
server.on("error", onError);

function onError(error: NodeJS.ErrnoException) {
	if (error.syscall !== "listen") {
		throw error;
	}
	//TODO: handle specific listen errors with friendly messages
	switch (error.code) {
		case "EACCES":
			console.error(`${bind} requires elevated privileges`);
			process.exit(1);
		case "EADDRINUSE":
			console.error(`${bind} is already in use`);
			process.exit(1);
		default:
			throw error;
	}
}

function onListening() {
	console.info(`Listening on ${bind}`);
}

HealthCheck.createTerminus(server, HealthCheck.options);

export default server;