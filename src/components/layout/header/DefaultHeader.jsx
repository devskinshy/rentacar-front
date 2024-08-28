import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Globe, AlignLeft } from 'lucide-react';
import { useTranslations } from 'next-intl';

function DefaultHeader() {
	const t = useTranslations('header');

	return (
		<header className='sticky top-0 bg-white'>
			<div className='container mx-auto px-4 py-8'>
				<div className='flex items-center justify-between'>
					<div className='h-12 w-36'>
						<Image
							src='/ko/ico-logo.png'
							alt='logo'
							width={201}
							height={52}
							layout='responsive'
						/>
					</div>

					<div className='flex items-center space-x-1'>
						<Button variant='secondary'>{t('login')}</Button>
						<Button variant='ghost' size='icon'>
							<Globe />
						</Button>
						<Button variant='ghost' size='icon'>
							<AlignLeft />
						</Button>
					</div>
				</div>
			</div>
		</header>
	);
}

export default DefaultHeader;
