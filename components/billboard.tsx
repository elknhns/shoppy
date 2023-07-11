import { Billboard as BillboardType } from '@/types';

type BillboardProps = { data: BillboardType };

const Billboard = ({ data }: BillboardProps) => (
	<div
		className='rounded-xl aspect-square md:aspect-[2.4/1] bg-cover m-4 sm:m-6 lg:m-8'
		style={{ backgroundImage: `url(${data.imageUrl})` }}
	>
		<div className='h-full w-full flex justify-center items-center text-center font-bold text-3xl sm:text-5xl lg:text-6xl'>
			<div className='sm:max-w-xl max-w-xs'>{data.label}</div>
		</div>
	</div>
);

export default Billboard;
