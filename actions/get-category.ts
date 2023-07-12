import axios from 'axios';

import { Category } from '@/types';

const getCategory = (id: string) =>
	axios.get<Category>(`${process.env.NEXT_PUBLIC_API_URL}/categories/${id}`);

export default getCategory;
