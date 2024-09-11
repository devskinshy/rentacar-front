'use client';

import React from 'react';
import Lottie from 'react-lottie';
import { Card } from '@/components/ui/card';
import jejuLottie from './lotties/jejuLottie.json';
import landLottie from './lotties/landLottie.json';
import longRentLottie from './lotties/longRentLottie.json';

function HomeShortRent() {
	const jeju = {
		loop: true,
		autoplay: true,
		animationData: jejuLottie,
		// rendererSettings: {
		// 	preserveAspectRatio: 'xMidYMid slice',
		// },
	};
	const land = {
		loop: true,
		autoplay: true,
		animationData: landLottie,
		// rendererSettings: {
		// 	preserveAspectRatio: 'xMidYMid slice',
		// },
	};
	// const long = {
	// 	loop: true,
	// 	autoplay: true,
	// 	animationData: longRentLottie,
	// 	rendererSettings: {
	// 		preserveAspectRatio: 'xMidYMid slice',
	// 	},
	// };
	return (
		<section className='space-y-3'>
			<div className='flex justify-between'>
				<p>단기 렌터카</p>
				<p>예약확인</p>
			</div>
			<div className='space-y-3'>
				<div className='flex space-x-3'>
					<Card className='w-1/2 rounded-2xl'>
						<Lottie options={jeju} />
					</Card>
					<Card className='w-1/2 rounded-2xl'>
						<Lottie options={land} />
					</Card>
				</div>
				<div>
					<Card className='w-full rounded-2xl'>items</Card>
				</div>
			</div>
			<div>temp</div>
		</section>
	);
}

export default HomeShortRent;
