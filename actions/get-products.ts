import axios from 'axios';
import qs from 'query-string';

import { Product } from '@/types';

type Query = {
	categoryId?: string;
	colorId?: string;
	sizeId?: string;
	isFeatured?: boolean;
};

const getProducts = (query: Query) =>
	axios.get<Product[]>(
		qs.stringifyUrl({
			url: `${process.env.NEXT_PUBLIC_API_URL}/products`,
			query,
		})
	);

export default getProducts;
