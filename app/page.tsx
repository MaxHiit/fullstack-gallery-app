import { getImages } from './actions/getImages';
import Gallery from './components/gallery/Gallery';

// making dynamic request by disabling cache
export const revalidate = 0;

const Home = async () => {
	const imagesList = await getImages();

	return (
		<main className='flex min-h-autoo flex-col items-center justify-between py-12'>
			<Gallery imagesList={imagesList} />
		</main>
	);
};

export default Home;
