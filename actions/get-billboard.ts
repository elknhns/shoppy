import axios from 'axios';

import { Billboard } from '@/types';

const getBillboard = (id: string) =>
	axios.get<Billboard>(`${process.env.NEXT_PUBLIC_API_URL}/billboards/${id}`);

export default getBillboard;
