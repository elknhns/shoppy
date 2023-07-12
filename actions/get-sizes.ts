import axios from 'axios';

import { Size } from '@/types';

const getSizes = () =>
	axios.get<Size[]>(`${process.env.NEXT_PUBLIC_API_URL}/sizes`);

export default getSizes;
