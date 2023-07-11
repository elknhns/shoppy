import Billboard from '@/components/billboard';
import Container from '@/components/ui/container';
import getBillboard from '@/actions/get-billboard';
import getProducts from '@/actions/get-products';
import ProductList from '@/components/product-list';

export const revalidate = 0;

export default async function HomePage() {
	const { data: products } = await getProducts({ isFeatured: true });
	const { data: billboard } = await getBillboard(
		'0ff587f4-622e-4214-9329-c9f8df13076c'
	);

	return (
		<Container>
			<div className='space-y-10 pb-10'>
				<Billboard data={billboard} />

				<div className='px-4 sm:px-6 lg:px-8'>
					<ProductList title='Featured Products' items={products} />
				</div>
			</div>
		</Container>
	);
}
