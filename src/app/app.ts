import { Request, Response, Express, json } from 'express';
import cors from 'cors';

export const bootstrap = (app: Express) => {
	// Middleware configuration
	app.use(cors());
	app.use(json());

	// Routes configuration
	app.get('/', (req: Request, res: Response) => {
		res.status(200).json({ message: 'Hello World!' });
	});

	// Error handling
	app.use((req: Request, res: Response) => {
		const URL = req.originalUrl;
		res.status(404).json({
			status_code: 404,
			status: 'NOT_FOUND',
			detail: {
				message: `The requested URL ${URL} was not found on this server.`,
			},
		});
	});
};