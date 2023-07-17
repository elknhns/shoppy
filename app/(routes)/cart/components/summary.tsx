'use client';

import { toast } from 'react-hot-toast';
import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';

import Button from '@/components/ui/button';
import Currency from '@/components/ui/currency';
import useCart from '@/hooks/use-cart';

export default function Summary() {
	const searchParams = useSearchParams();
	const { items, removeAll } = useCart();

	const onCheckout = async () => {
		const response = await axios.post<{ url: Location }>(
			`${process.env.NEXT_PUBLIC_API_URL}/checkout`,
			{ productIds: items.map((item) => item.id) }
		);

		window.location = response.data.url;
	};

	const totalPrice = useMemo(
		() => items.reduce((total, item) => total + Number(item.price), 0),
		[items]
	);

	useEffect(() => {
		if (searchParams.get('success')) {
			toast.success('Payment completed.');
			removeAll();
		}

		if (searchParams.get('canceled')) toast.error('Something went wrong.');
	}, [searchParams, removeAll]);

	return (
		<div className='mt-16 lg:mt-0 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:p-8 lg:col-span-5'>
			<h2 className='text-lg font-medium text-gray-900'>Order Summary</h2>

			<div className='mt-6'>
				<div className='flex justify-between border-t border-gray-200 pt-4'>
					<div className='font-medium text-gray-900'>Order total</div>
					<Currency value={totalPrice} />
				</div>
			</div>

			<Button
				className='mt-6 w-full'
				disabled={items.length === 0}
				onClick={onCheckout}
			>
				Checkout
			</Button>
		</div>
	);
}
