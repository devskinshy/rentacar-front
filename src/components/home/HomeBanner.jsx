import React from 'react';
import Image from 'next/image';

function HomeBanner() {
	return (
		<section>
			<Image
				src='https://www.lotterentacar.net/atch/getImage.do?atchFileId=FILE0000000004199161'
				alt='banner'
				width={1308}
				height={560}
			/>
		</section>
	);
}

export default HomeBanner;
