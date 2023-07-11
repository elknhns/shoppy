import { Expand, ShoppingCart } from 'lucide-react';
import Image from 'next/image';

import { Product } from '@/types';
import Currency from '@/components/ui/currency';
import IconButton from '@/components/ui/icon-button';

type ProductCardProps = { data: Product };

const ProductCard = ({ data }: ProductCardProps) => {
	return (
		<div className='bg-white cursor-pointer rounded-xl border p-3 group space-y-4'>
			<div className='aspect-square rounded-xl bg-gray-100 relative'>
				<Image
					src={data.images[0].url}
					alt='Image'
					fill
					className='object-cover rounded-md'
				/>

				<div className='absolute bottom-5 opacity-0 group-hover:opacity-100 transition w-full'>
					<div className='flex justify-center gap-x-6'>
						<IconButton
							icon={
								<Expand size={20} className='text-gray-600' />
							}
						/>

						<IconButton
							icon={
								<ShoppingCart
									size={20}
									className='text-gray-600'
								/>
							}
						/>
					</div>
				</div>
			</div>

			<div>
				<p className='font-semibold text-lg'>{data.name}</p>
				<p className='text-sm text-gray-500'>{data.category.name}</p>
			</div>

			<Currency value={data.price} />
		</div>
	);
};

export default ProductCard;
