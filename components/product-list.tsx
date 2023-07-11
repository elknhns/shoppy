import { Product } from '@/types';
import NoResults from '@/components/ui/no-results';
import ProductCard from './ui/product-card';

type ProductListProps = { title: string; items: Product[] };

const ProductList = ({ title, items }: ProductListProps) => (
	<div className='space-y-4'>
		<h3 className='font-bold text-3xl'>{title}</h3>
		{items.length > 0 ? (
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
				{items.map((item) => (
					<ProductCard key={item.id} data={item} />
				))}
			</div>
		) : (
			<NoResults />
		)}
	</div>
);

export default ProductList;
