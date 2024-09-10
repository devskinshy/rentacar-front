import React from 'react';
import Lottie from 'react-lottie';
import jejuLottie from './lotties/jejuLottie.json';
import landLottie from './lotties/landLottie.json';

function HomeShortRent() {
	return (
		<section className='space-y-3'>
			<div className='flex justify-between'>
				<p>단기 렌터카</p>
				<p>예약확인</p>
			</div>
			<div>
				<Lottie
					options={{
						loop: true,
						autoplay: true,
						animationData: jejuLottie,
					}}
				/>
				<Lottie
					options={{
						loop: true,
						autoplay: true,
						animationData: landLottie,
					}}
				/>
			</div>
			<div>temp</div>
		</section>
	);
}

export default HomeShortRent;
