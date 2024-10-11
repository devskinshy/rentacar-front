'use client';

import React from 'react';

import Lottie from 'lottie-react';

import { Card } from '@/components/ui/card';

import longRentLottie from './lotties/longRentLottie.json';

function HomeLongRent() {
	return (
		<section className='space-y-3'>
			<div className='flex'>
				<p>장기 렌터카</p>
			</div>
			<div className='grid grid-cols-2 gap-3'>
				<Card className='row-span-2 rounded-2xl'>
					<Lottie animationData={longRentLottie} loop autoplay />
				</Card>
				<Card className='w-full flex-auto rounded-2xl'>마이카 세이브</Card>
				<Card className='w-full flex-auto rounded-2xl'>비즈카</Card>
				<Card className='col-span-2 rounded-2xl'>items</Card>
			</div>
		</section>
	);
}

export default HomeLongRent;
