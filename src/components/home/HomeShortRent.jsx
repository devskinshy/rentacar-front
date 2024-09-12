'use client';

import React from 'react';
import Lottie from 'lottie-react';
import { Card } from '@/components/ui/card';
import jejuLottie from './lotties/jejuLottie.json';
import landLottie from './lotties/landLottie.json';

function HomeShortRent() {
	return (
		<section className='space-y-3'>
			<div className='flex justify-between'>
				<p>단기 렌터카</p>
				<p>예약확인</p>
			</div>
			<div className='space-y-3'>
				<div className='flex space-x-3'>
					<Card className='w-1/2 rounded-2xl'>
						<Lottie animationData={jejuLottie} loop autoplay />
					</Card>
					<Card className='w-1/2 rounded-2xl'>
						<Lottie animationData={landLottie} loop autoplay />
					</Card>
				</div>
				<div>
					<Card className='w-full rounded-2xl'>items</Card>
				</div>
			</div>
		</section>
	);
}

export default HomeShortRent;
