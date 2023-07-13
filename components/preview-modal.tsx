'use client';

import Gallery from '@/components/gallery';
import Info from '@/components/info';
import Modal from '@/components/ui/modal';
import usePreviewModal from '@/hooks/use-preview-modal';

export default function PreviewModal() {
	const { data: product, isOpen, onClose } = usePreviewModal();

	return (
		product && (
			<Modal isOpen={isOpen} onClose={onClose}>
				<div className='w-full grid grid-cols-1 sm:grid-cols-12 gap-x-6 lg:gap-x-8 gap-y-8'>
					<div className='sm:col-span-4 lg:col-span-5'>
						<Gallery images={product.images} />
					</div>

					<div className='sm:col-span-8 lg:col-span-7'>
						<Info data={product} />
					</div>
				</div>
			</Modal>
		)
	);
}
