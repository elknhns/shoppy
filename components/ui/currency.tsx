'use client';

import { useEffect, useState } from 'react';

const formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
});

type CurrencyProps = { value: string | number };

const Currency = ({ value }: CurrencyProps) => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => setIsMounted(true), []);

	return (
		isMounted && (
			<div className='font-semibold'>
				{formatter.format(Number(value))}
			</div>
		)
	);
};

export default Currency;
