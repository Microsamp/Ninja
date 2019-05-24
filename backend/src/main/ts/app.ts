"use strict";

import { Server } from "./server";

let server: Server = Server.bootstrap();
// @ts-ignore
server.server.on("error", (error) => {
	console.error(error);
});