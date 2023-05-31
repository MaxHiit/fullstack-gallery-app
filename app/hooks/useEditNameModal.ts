import { create } from 'zustand';
import { ImageType } from '../types';

interface EditNameModalStore {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
	image: Pick<ImageType, '_id' | 'name' | 'url'>;
}

const useEditNameModal = create<EditNameModalStore>((set) => ({
	isOpen: false,
	image: {
		name: '',
		_id: ''
	},
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false })
}));

export default useEditNameModal;
