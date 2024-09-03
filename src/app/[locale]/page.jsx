import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';

export default function Home() {
	const t = useTranslations('main');

	return (
		<Carousel>
			<CarouselContent>
				{Array.from({ length: 5 }).map((_, index) => (
					<CarouselItem key={index}>
						<Card>
							<CardContent className='flex aspect-square items-center justify-center p-6'>
								<span className='text-4xl font-semibold'>{index + 1}</span>
							</CardContent>
						</Card>
					</CarouselItem>
				))}
			</CarouselContent>
			{/* <CarouselPrevious /> */}
			{/* <CarouselNext /> */}
		</Carousel>
	);
}
