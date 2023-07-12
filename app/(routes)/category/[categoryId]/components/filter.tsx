'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import qs from 'query-string';

import { cn } from '@/lib/utils';
import { Color, Size } from '@/types';
import Button from '@/components/ui/button';

type FilterProps = {
	data: Array<Size | Color>;
	name: string;
	valueKey: string;
};

export default function Filter({ valueKey, name, data }: FilterProps) {
	const searchParams = useSearchParams();
	const router = useRouter();

	const selectedValue = searchParams.get(valueKey);

	const onClick = (id: string) => {
		const current = qs.parse(searchParams.toString());

		const url = qs.stringifyUrl({
			url: window.location.href,
			query: {
				...current,
				[valueKey]: current[valueKey] === id ? undefined : id,
			},
		});

		router.push(url);
	};

	return (
		<div className='mb-8'>
			<h3 className='text-lg font-semibold'>{name}</h3>

			<hr className='my-4' />

			<div className='flex flex-wrap gap-2'>
				{data.map((filter) => (
					<Button
						key={filter.id}
						className={cn(
							'rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300',
							selectedValue === filter.id && 'bg-black text-white'
						)}
						onClick={() => onClick(filter.id)}
					>
						{filter.name}
					</Button>
				))}
			</div>
		</div>
	);
}
