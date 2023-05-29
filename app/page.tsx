import { getImages } from './lib/getImages';
import Gallery from './components/gallery/Gallery';

const Home = async () => {
	const imagesList = await getImages();

	return (
		<main className='flex min-h-autoo flex-col items-center justify-between py-12'>
			<Gallery imagesList={imagesList} />
		</main>
	);
};

export default Home;
