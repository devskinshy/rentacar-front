import React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useLocale, useTranslations } from 'next-intl';

function DefaultFooter() {
	const locale = useLocale();
	const c = useTranslations('language');
	const t = useTranslations('footer');

	const lang = locale === 'ko' ? 'en' : 'ko';

	return (
		<footer className='bg-black'>
			<div className='container mx-auto px-4 py-8'>
				<div className='flex items-center justify-between text-white'>
					<div className='flex h-3 items-center space-x-4'>
						<div>{t('terms')}</div>
						<Separator orientation='vertical' />
						<div>{t('privacy')}</div>
					</div>
					<div>
						<Button
							variant='outline'
							className='rounded- rounded-full border-background bg-inherit text-inherit'
						>
							{c(lang)}
						</Button>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default DefaultFooter;
