import { Router } from 'express';

import { AppError } from '../errors/AppError';
import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.get('/', (_req, res) => {
	const categories = categoriesRepository.list();

	return res.status(201).json(categories);
});

categoriesRoutes.post('/', (req, res) => {
	const { name, description } = req.body;

	const categoryAlredyExists = categoriesRepository.findByName(name);

	if (categoryAlredyExists) throw new AppError('Category Already Exists');

	categoriesRepository.create({ name, description });

	return res.status(201).send();
});

export { categoriesRoutes };
