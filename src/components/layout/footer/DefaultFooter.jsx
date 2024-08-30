import React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

function DefaultFooter() {
	return (
		<footer className='bg-black'>
			<div className='container mx-auto px-4 py-8'>
				<div className='flex items-center justify-between text-white'>
					<div className='flex h-5 items-center space-x-4'>
						<div>개인정보처리방침</div>
						<Separator orientation='vertical' />
						<div>이용약관</div>
					</div>
					<div>
						<Button
							variant='outline'
							className='border-background bg-inherit text-inherit'>
							ENGLISH
						</Button>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default DefaultFooter;
