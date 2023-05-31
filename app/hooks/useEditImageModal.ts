import { create } from 'zustand';
import { ImageType } from '../types';

interface EditImageModalStore {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
	image: Pick<ImageType, '_id' | 'name' | 'url' | 'contentType'>;
	updateImage: (value: Pick<ImageType, '_id' | 'url' | 'contentType' | 'name'>) => void;
}

const useEditImageModal = create<EditImageModalStore>((set) => ({
	isOpen: false,
	image: {
		name: '',
		url: '',
		_id: '',
		contentType: ''
	},
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
	updateImage: (value) => set({ image: value })
}));

export default useEditImageModal;
