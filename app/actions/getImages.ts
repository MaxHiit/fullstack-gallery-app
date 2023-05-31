import { ImageType } from '../types';

export const getImages = async (): Promise<ImageType[]> => {
	try {
		const _HOST = process.env.API_URL_BASE;
		const res = await fetch(`${_HOST}/images`, { cache: 'no-store' });
		const data = await res.json();

		return data;
	} catch (error) {
		console.error('Error fetching images:', error);
		return [];
	}
};
