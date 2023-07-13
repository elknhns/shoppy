'use client';

import { Expand, ShoppingCart } from 'lucide-react';
import { MouseEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Product } from '@/types';
import Currency from '@/components/ui/currency';
import IconButton from '@/components/ui/icon-button';
import usePreviewModal from '@/hooks/use-preview-modal';
import useCart from '@/hooks/use-cart';

type ProductCardProps = { data: Product };

export default function ProductCard({ data }: ProductCardProps) {
	const previewModal = usePreviewModal();
	const cart = useCart();

	const onPreview = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		previewModal.onOpen(data);
	};

	const onAddToCart = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		cart.addItem(data);
	};

	return (
		<Link
			href={`/product/${data.id}`}
			className='bg-white cursor-pointer rounded-xl border p-3 group space-y-4'
		>
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
							onClick={onPreview}
						/>

						<IconButton
							icon={
								<ShoppingCart
									size={20}
									className='text-gray-600'
								/>
							}
							onClick={onAddToCart}
						/>
					</div>
				</div>
			</div>

			<div>
				<p className='font-semibold text-lg'>{data.name}</p>
				<p className='text-sm text-gray-500'>{data.category.name}</p>
			</div>

			<Currency value={data.price} />
		</Link>
	);
}
