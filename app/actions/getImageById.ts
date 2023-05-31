import { ImageType } from '../types';

export const getImageById = async (id: string): Promise<string | undefined> => {
	try {
		const _HOST = process.env.API_URL_BASE;
		const res = await fetch(`${_HOST}/images/${id}`);
		const data = await res.json();

		return data;
	} catch (error) {
		console.error('Error fetching images:', error);
	}
};
