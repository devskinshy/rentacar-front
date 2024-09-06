import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel';

function HomeBanner() {
	return (
		<section>
			<Carousel className='w-full'>
				<CarouselContent>
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem key={index}>
							<Card>
								<CardContent className='overflow-hidden rounded-2xl p-0'>
									<Image
										src='https://www.lotterentacar.net/atch/getImage.do?atchFileId=FILE0000000004199161'
										alt='banner'
										width={1308}
										height={560}
									/>
								</CardContent>
							</Card>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</section>
	);
}

export default HomeBanner;
