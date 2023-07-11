'use client';

import { MouseEventHandler, ReactElement } from 'react';

import { cn } from '@/lib/utils';

type IconButtonProps = {
	onClick?: MouseEventHandler;
	icon: ReactElement;
	className?: string;
};

const IconButton = ({ onClick, className, icon }: IconButtonProps) => (
	<button
		onClick={onClick}
		className={cn(
			'bg-white p-2 rounded-full border shadow-md hover:scale-110 transition',
			className
		)}
	>
		{icon}
	</button>
);

export default IconButton;
