import React from 'react';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

function HomeMagazine() {
	return (
		<section className='space-y-3'>
			<div className='flex justify-between'>
				<p>매거진</p>
				<p>더보기</p>
			</div>
			<Carousel className='w-full'>
				<CarouselContent>
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem key={index}>
							<Card>
								<CardContent className='overflow-hidden rounded-2xl p-0'>
									<Image
										src='https://www.lotterentacar.net/atch/getImage.do?atchFileId=FILE0000000004222066'
										alt='banner'
										width={1308}
										height={560}
									/>
								</CardContent>
							</Card>
							<p>그린카가 '롯데렌터카 G car'로 새롭게 태어납니다!</p>
							<span>#G Car</span>
							<span>#G Car</span>
							<span>#G Car</span>
							<span>#G Car</span>
							<span>#G Car</span>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</section>
	);
}

export default HomeMagazine;
