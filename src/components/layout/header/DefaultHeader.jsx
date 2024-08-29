import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Globe, AlignLeft } from 'lucide-react';
import { useTranslations } from 'next-intl';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
	DropdownMenuPortal,
} from '@/components/ui/dropdown-menu';

import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';

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

					<div className='flex items-center space-x-3'>
						<Button variant='secondary'>{t('login')}</Button>

						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Globe />
							</DropdownMenuTrigger>
							<DropdownMenuPortal>
								<DropdownMenuContent>
									<DropdownMenuItem>한국어</DropdownMenuItem>
									<DropdownMenuItem>영어</DropdownMenuItem>
									<DropdownMenuItem>일본어</DropdownMenuItem>
									<DropdownMenuItem>중국어</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenuPortal>
						</DropdownMenu>

						<Sheet>
							<SheetTrigger asChild>
								<AlignLeft />
							</SheetTrigger>
							<SheetContent>
								<SheetHeader>
									<SheetTitle>Are you absolutely sure?</SheetTitle>
									<SheetDescription>
										This action cannot be undone. This will permanently delete
										your account and remove your data from our servers.
									</SheetDescription>
								</SheetHeader>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</header>
	);
}

export default DefaultHeader;
