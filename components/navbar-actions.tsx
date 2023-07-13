'use client';

import { ShoppingBag } from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from 'next/link';

import Button from '@/components/ui/button';
import useCart from '@/hooks/use-cart';

export default function NavbarActions() {
	const { items } = useCart();
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => setIsMounted(true), []);

	return (
		isMounted && (
			<Link href='/cart' className='ml-auto'>
				<Button className='px-4 py-2 flex items-center gap-x-2'>
					<ShoppingBag size={20} color='white' />

					<span className='text-sm font-medium text-white'>
						{items.length}
					</span>
				</Button>
			</Link>
		)
	);
}
