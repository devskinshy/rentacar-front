import HomeBanner from '@/components/home/HomeBanner';
import HomeShortRent from '@/components/home/HomeShortRent';
import HomeLongRent from '@/components/home/HomeLongRent';
import HomeMagazine from '@/components/home/HomeMagazine';

export default function Home() {
	return (
		<div className='space-y-3'>
			<HomeBanner />
			<HomeShortRent />
			<HomeLongRent />
			<HomeMagazine />
		</div>
	);
}
