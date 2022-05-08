import { Router } from 'express';

import { categoriesRoutes } from './categories.routes';

const routes = Router();

routes.get('/', (_req, res) => {
	return res.json({ message: 'Welcome to Rentalx API!' });
});

routes.use('/categories', categoriesRoutes);

export { routes };
