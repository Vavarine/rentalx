import { Router } from 'express';

import { CategoriesRepository } from '../modules/cars/repositories/ICategoriesRepository';
import { CreateCategoryService } from '../modules/cars/services/CreateCategoryService';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();
const createCategoryService = new CreateCategoryService(categoriesRepository);

categoriesRoutes.get('/', (_req, res) => {
	const categories = categoriesRepository.list();

	return res.status(201).json(categories);
});

categoriesRoutes.post('/', (req, res) => {
	const { name, description } = req.body;

	createCategoryService.execute({ name, description });

	return res.status(201).send();
});

export { categoriesRoutes };
