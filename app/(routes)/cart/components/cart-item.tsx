import { X } from 'lucide-react';
import Image from 'next/image';

import { Product } from '@/types';
import Currency from '@/components/ui/currency';
import IconButton from '@/components/ui/icon-button';
import useCart from '@/hooks/use-cart';

type CartItemProps = { data: Product };

export default function CartItem({ data }: CartItemProps) {
	const cart = useCart();

	return (
		<li className='py-6 border-b flex'>
			<div className='relative h-24 sm:h-48 w-24 sm:w-48 rounded-md overflow-hidden'>
				<Image
					src={data.images[0].url}
					alt=''
					fill
					className='object-cover object-center'
				/>
			</div>

			<div className='relative ml-4 sm:ml-6 flex-1'>
				<div className='absolute z-10 right-0 top-0'>
					<IconButton
						icon={
							<X
								size={15}
								onClick={() => cart.removeItem(data.id)}
							/>
						}
					/>
				</div>

				<div className='sm:pr-12 sm:grid sm:grid-cols-2 sm:gap-x-6'>
					<p className='text-lg font-semibold'>{data.name}</p>

					<div className='mt-1 text-sm flex sm:justify-end gap-x-4'>
						<p className='text-gray-500'>{data.color.name}</p>

						<p className='text-gray-500 border-l pl-4 border-gray-200'>
							{data.size.name}
						</p>
					</div>

					<Currency value={data.price} />
				</div>
			</div>
		</li>
	);
}
