"use strict";

import * as express from "express";

export class ContentRoute {

	public route(req: express.Request, res: express.Response, next: express.NextFunction) {
		res.status(200);
		res.send("Hello world!");
	}

}
