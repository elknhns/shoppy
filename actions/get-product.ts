import axios from 'axios';

import { Product } from '@/types';

const getProduct = (id: string) =>
	axios.get<Product>(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`);

export default getProduct;
