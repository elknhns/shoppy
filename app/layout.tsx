import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

import './globals.css';

type RootLayoutProps = { children: React.ReactNode };

const urbanist = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Shoppy',
	description: 'Shoppy Store',
};

const RootLayout = ({ children }: RootLayoutProps) => (
	<html lang='en'>
		<body className={urbanist.className}>
      <Navbar />
			{children}
			<Footer />
		</body>
	</html>
);

export default RootLayout;
