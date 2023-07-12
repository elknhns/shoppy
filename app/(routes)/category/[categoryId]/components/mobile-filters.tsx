'use client';

import { Dialog } from '@headlessui/react';
import { Plus, X } from 'lucide-react';
import { useState } from 'react';

import { Color, Size } from '@/types';
import Button from '@/components/ui/button';
import Filter from './filter';
import IconButton from '@/components/ui/icon-button';

type MobileFiltersProps = {
	sizes: Size[];
	colors: Color[];
};

export default function MobileFilters({ sizes, colors }: MobileFiltersProps) {
	const [isOpen, setIsOpen] = useState(false);

	const onClose = () => setIsOpen(false);

	return (
		<>
			<Button
				className='flex items-center gap-x-2 lg:hidden'
				onClick={() => setIsOpen(true)}
			>
				Filters <Plus size={20} />
			</Button>

			<Dialog open={isOpen} onClose={onClose} className='lg:hidden'>
				<div className='fixed inset-0 bg-black bg-opacity-25' />

				<div className='fixed inset-0 z-40'>
					<Dialog.Panel className='relative ml-auto h-full max-w-xs py-4 pb-6 bg-white overflow-y-auto shadow-xl'>
						<div className='flex justify-end px-4'>
							<IconButton
								icon={<X size={15} />}
								onClick={onClose}
							/>
						</div>

						<div className='p-4'>
							<Filter
								valueKey='sizeId'
								name='Sizes'
								data={sizes}
							/>

							<Filter
								valueKey='colorId'
								name='Colors'
								data={colors}
							/>
						</div>
					</Dialog.Panel>
				</div>
			</Dialog>
		</>
	);
}
