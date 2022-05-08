import { CategoriesRepository } from '../repositories/ICategoriesRepository';

interface ICreateCategory {
	name: string;
	description: string;
}

class CreateCategoryService {
	constructor(private categoriesRepository: CategoriesRepository) {}

	execute({ name, description }: ICreateCategory) {
		const categoryAlredyExists = this.categoriesRepository.findByName(name);

		if (categoryAlredyExists) throw new Error('Category Already Exists');

		this.categoriesRepository.create({ name, description });
	}
}

export { CreateCategoryService };
