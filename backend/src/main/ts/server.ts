"use strict";

import express from "express";
import * as http from "http";
import * as morgan from "morgan";
// @ts-ignore
import { ContentRoute } from "./routes/contentRoute";


export class Server {
	
	public app: express.Application;
	public server: http.Server | undefined;

	constructor() {
		this.app = express();
		
		this.config();
		this.routes();
		this.start();
	}

	public config(): void {
		this.app.use(morgan.default("dev"));
		this.app.use(express.json());
		this.app.use(express.static(__dirname + "/static/"));
		this.server = http.createServer(this.app);
	}

	private routes() {
		let router: express.Router;
		router = express.Router();

		let content: ContentRoute = new ContentRoute();

		router.get("/", content.route);

		this.app.use(router);
	}

	public start() {
		// @ts-ignore
		this.server.listen(1337, "127.0.0.1", () => {
			console.log('morgan initialized');
		});
	}

	public static bootstrap(): Server {
		return new Server();
	}

}
