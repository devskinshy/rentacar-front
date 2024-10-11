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
			<div className='grid grid-cols-2 gap-3'>
				<Card className='rounded-2xl'>
					<Lottie animationData={jejuLottie} loop autoplay />
				</Card>
				<Card className='rounded-2xl'>
					<Lottie animationData={landLottie} loop autoplay />
				</Card>
				<Card className='col-span-2 rounded-2xl'>items</Card>
			</div>
		</section>
	);
}

export default HomeShortRent;
