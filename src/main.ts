import { bootstrap } from "@app/app"; // import the function from app.ts
import env from "@config/env"; 		  // import the env object from env.ts

import express from "express";

const init = async () => {
	// Create express app
	const app = express();

	// Bootstrap application
	bootstrap(app);

	// Start server and listen requests on port 3005
	app.listen(env.PORT, () => {
		console.log(`Server is running on port ${env.PORT}`);
	});
}

init();