import Link from 'next/link';

import Container from '@/components/ui/container';
import getCategories from '@/actions/get-categories';
import MainNav from '@/components/main-nav';
import NavbarActions from '@/components/navbar-actions';

export const revalidate = 0;

export default async function Navbar() {
	const { data: categories } = await getCategories();

	return (
		<div className='border-b'>
			<Container>
				<div className='px-4 sm:px-6 md:px-8 lg:px-8 h-16 flex items-center'>
					<Link href='/' className='ml-4 lg:ml-0'>
						<p className='font-bold text-xl'>SHOPPY</p>
					</Link>

					<MainNav data={categories} />

					<NavbarActions />
				</div>
			</Container>
		</div>
	);
}
