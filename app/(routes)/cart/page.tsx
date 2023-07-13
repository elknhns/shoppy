'use client';

import { useEffect, useState } from 'react';

import CartItem from './components/cart-item';
import Container from '@/components/ui/container';
import Summary from './components/summary';
import useCart from '@/hooks/use-cart';

export const revalidate = 0;

export default function CartPage() {
	const { items } = useCart();
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => setIsMounted(true), []);

	return (
		isMounted && (
			<Container>
				<div className='px-4 sm:px-6 lg:px-8 py-16'>
					<h1 className='text-3xl font-bold'>Shopping Cart</h1>

					<div className='mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12'>
						<div className='lg:col-span-7'>
							{items.length === 0 && (
								<p className='text-neutral-500'>
									No items added to cart
								</p>
							)}

							<ul>
								{items.map((item) => (
									<CartItem key={item.id} data={item} />
								))}
							</ul>
						</div>

						<Summary />
					</div>
				</div>
			</Container>
		)
	);
}
