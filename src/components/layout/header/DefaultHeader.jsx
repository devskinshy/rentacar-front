import React from 'react';

import {
	AlignLeftIcon,
	CircleUserRoundIcon,
	GlobeIcon,
	UserRoundXIcon,
} from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuPortal,
	DropdownMenuTrigger,
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
		<header className='sticky top-0 z-10 bg-white'>
			<div className='container mx-auto px-4 py-8'>
				<div className='flex items-center justify-between'>
					<div className='h-12 w-36'>
						<Image
							src='/ko/ico-logo.png'
							alt='logo'
							width={201}
							height={52}
							priority
						/>
					</div>

					<div className='flex items-center'>
						<Button variant='ghost' size='icon'>
							{/* <CircleUserRoundIcon /> */}
							<UserRoundXIcon />
						</Button>

						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant='ghost' size='icon'>
									<GlobeIcon />
								</Button>
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
								<Button variant='ghost' size='icon'>
									<AlignLeftIcon />
								</Button>
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
