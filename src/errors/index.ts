import { Express, Request, Response } from 'express';

import { AppError } from './AppError';

const errorHandler = (app: Express) => {
	app.use((err, _req: Request, res: Response) => {
		if (err instanceof AppError) {
			return res.status(err.statusCode).json({ message: err.message });
		}

		return res.status(500).json({ message: 'Internal server error' });
	});
};

export { errorHandler };
