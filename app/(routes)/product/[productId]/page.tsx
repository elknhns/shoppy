import Container from '@/components/ui/container';
import Gallery from '@/components/gallery';
import getProduct from '@/actions/get-product';
import getProducts from '@/actions/get-products';
import Info from '@/components/info';
import ProductList from '@/components/product-list';

type ProductPageProps = { params: { productId: string } };

export default async function ProductPage({ params }: ProductPageProps) {
	const { data: product } = await getProduct(params.productId);
	const { data: suggestedProducts } = await getProducts({
		categoryId: product.category.id,
	});

	return (
		<div className='bg-white'>
			<Container>
				<div className='px-4 py-10 sm:px-6 lg:px-8'>
					<div className='lg:grid lg:grid-cols-2 lg:gap-x-8'>
						<Gallery images={product.images} />

						<div className='mt-10 sm:mt-16 lg:mt-0 px-4 sm:px-0'>
							<Info data={product} />
						</div>
					</div>

					<hr className='my-10' />

					<ProductList
						title='Related Items'
						items={suggestedProducts}
					/>
				</div>
			</Container>
		</div>
	);
}
