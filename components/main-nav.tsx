'use client';

import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { Category } from '@/types';
import { cn } from '@/lib/utils';

type MainNavProps = { data: Category[] };

export default function MainNav({ data }: MainNavProps) {
	const pathname = usePathname();

	const routes = useMemo(
		() =>
			data.map((route) => ({
				href: `/category/${route.id}`,
				label: route.name,
			})),
		[data]
	);

	return (
		<nav className='mx-6 flex items-center gap-x-4 lg:gap-x-6'>
			{routes.map((route) => (
				<Link
					key={route.href}
					href={route.href}
					className={cn(
						'text-sm font-medium transition-colors hover:text-black',
						pathname === route.href
							? 'text-black'
							: 'text-neutral-500'
					)}
				>
					{route.label}
				</Link>
			))}
		</nav>
	);
}
