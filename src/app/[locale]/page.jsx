import HomeBanner from '@/components/home/HomeBanner';
import HomeLongRent from '@/components/home/HomeLongRent';
import HomeMagazine from '@/components/home/HomeMagazine';
import HomeShortRent from '@/components/home/HomeShortRent';

export default function Home() {
	return (
		<div className='space-y-5'>
			<HomeBanner />
			<HomeShortRent />
			<HomeLongRent />
			<HomeMagazine />
		</div>
	);
}
