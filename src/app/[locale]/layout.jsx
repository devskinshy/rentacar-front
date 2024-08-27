import '../../styles/globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import DefaultHeader from '@/components/layout/header/DefaultHeader';
import DefaultFooter from '@/components/layout/footer/DefaultFooter';

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default async function RootLayout({ children, params: { locale } }) {
	const messages = await getMessages();

	return (
		<html lang={locale} suppressHydrationWarning>
			<body className='flex min-h-screen flex-col'>
				<NextIntlClientProvider messages={messages}>
					<DefaultHeader />
					<main className='flex-grow'>
						<div className='container mx-auto px-4 py-8'>{children}</div>
					</main>
					<DefaultFooter />
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
