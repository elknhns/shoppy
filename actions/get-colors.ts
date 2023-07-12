import axios from 'axios';

import { Color } from '@/types';

const getColors = () =>
	axios.get<Color[]>(`${process.env.NEXT_PUBLIC_API_URL}/colors`);

export default getColors;
