'use client';

import { ShoppingCart } from 'lucide-react';

import { Product } from '@/types';
import Button from '@/components/ui/button';
import Currency from '@/components/ui/currency';
import useCart from '@/hooks/use-cart';

type InfoProps = { data: Product };

export default function Info({ data }: InfoProps) {
	const cart = useCart();

	return (
		<div>
			<h1 className='text-3xl font-bold text-gray-900'>{data.name}</h1>

			<p className='mt-3 text-2xl text-gray-900'>
				<Currency value={data.price} />
			</p>

			<hr className='my-4' />

			<div className='space-y-6'>
				<div className='flex items-center gap-x-4'>
					<h3 className='font-semibold text-black'>Size:</h3>
					<div>{data.size.name}</div>
				</div>

				<div className='flex items-center gap-x-4'>
					<h3 className='font-semibold text-black'>Color:</h3>

					<div
						className='h-6 w-6 rounded-full border border-gray-600'
						style={{ backgroundColor: data.color.value }}
					/>
				</div>
			</div>

			<div className='mt-10'>
				<Button
					className='flex items-center gap-x-2'
					onClick={() => cart.addItem(data)}
				>
					Add To Cart <ShoppingCart />
				</Button>
			</div>
		</div>
	);
}
