'use client';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import IconButton from './icon-button';
import { X } from 'lucide-react';

type ModalProps = {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => (
	<Transition show={isOpen} appear as={Fragment}>
		<Dialog onClose={onClose} className='relative z-10'>
			<div className='fixed inset-0 bg-black bg-opacity-50' />

			<div className='fixed inset-0 overflow-y-auto'>
				<div className='min-h-full flex items-center justify-center p-4'>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0 scale-95'
						enterTo='opacity-100 scale-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100 scale-100'
						leaveTo='opacity-0 scale-95'
					>
						<Dialog.Panel className='w-full max-w-3xl overflow-hidden rounded-lg align-middle'>
							<div className='relative w-full overflow-hidden bg-white px-4 sm:px-6 pb-8 pt-14 md:p-6 lg:p-8 sm:pt-8 shadow-2xl'>
								<div className='absolute right-4 top-4'>
									<IconButton
										icon={<X size={15} />}
										onClick={onClose}
									/>
								</div>

								{children}
							</div>
						</Dialog.Panel>
					</Transition.Child>
				</div>
			</div>
		</Dialog>
	</Transition>
);

export default Modal;
