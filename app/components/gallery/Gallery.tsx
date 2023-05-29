'use client';

import { ImageType } from '@/app/types/index';
import Card from '../card/Card';
// import Loader from '../loader/Loader';

interface GalleryProps {
	imagesList: ImageType[];
}

const Gallery = ({ imagesList }: GalleryProps) => {
	if (!imagesList.length) return <h1>No Images</h1>;

	return (
		<>
			{/* <Loader /> */}

			<div className='max-w-container w-full px-8 sm:px-10 lg:px-16'>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 lg:gap-6'>
					{imagesList.map((image: ImageType, idx: number) => (
						<Card key={idx} image={image} />
					))}
				</div>
			</div>
		</>
	);
};

export default Gallery;
