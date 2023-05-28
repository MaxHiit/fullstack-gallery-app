import Gallery from './components/gallery/Gallery';
import { getImages } from './lib/getImages';

const Home = async () => {
	const imagesList = await getImages();

	return (
		<main className='flex min-h-screen flex-col items-center justify-between py-12'>
			<Gallery imagesList={imagesList} />
		</main>
	);
};

export default Home;
