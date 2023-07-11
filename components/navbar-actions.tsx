'use client';

import { ShoppingBag } from 'lucide-react';
import { useEffect, useState } from 'react';

import Button from '@/components/ui/button';

export default function NavbarActions() {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => setIsMounted(true), []);

	return (
		isMounted && (
			<div className='ml-auto'>
				<Button className='px-4 py-2 flex items-center gap-x-2'>
					<ShoppingBag size={20} color='white' />
					<span className='text-sm font-medium text-white'>0</span>
				</Button>
			</div>
		)
	);
}
