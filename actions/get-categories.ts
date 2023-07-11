import axios from 'axios';

import { Category } from '@/types';

const getCategories = () =>
	axios.get<Category[]>(`${process.env.NEXT_PUBLIC_API_URL}/categories`);

export default getCategories;
