'use client';

import React from 'react';
import Lottie from 'lottie-react';
import { Card } from '@/components/ui/card';
import longRentLottie from './lotties/longRentLottie.json';

function HomeLongRent() {
	return (
		<section className='space-y-3'>
			<div>
				<p>장기 렌터카</p>
			</div>
			<div className='space-y-3'>
				<div className='flex space-x-3'>
					<Card className='w-1/2 rounded-2xl'>
						<Lottie animationData={longRentLottie} loop autoplay />
					</Card>
					<div className='flex w-1/2 flex-col space-y-3'>
						<Card className='w-full flex-auto rounded-2xl'>마이카 세이브</Card>
						<Card className='w-full flex-auto rounded-2xl'>비즈카</Card>
					</div>
				</div>
				<div>
					<Card className='w-full rounded-2xl'>차방정</Card>
				</div>
			</div>
			<div>temp</div>
		</section>
	);
}

export default HomeLongRent;
