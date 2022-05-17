import { Router } from 'express';

import { categoriesRoutes } from './categories.routes';
import { specificationRoutes } from './specifications.routes';

const routes = Router();

routes.get('/', (_req, res) => {
	return res.json({ message: 'Welcome to Rentalx API!' });
});

routes.use('/categories', categoriesRoutes);
routes.use('/specifications', specificationRoutes);

export { routes };
