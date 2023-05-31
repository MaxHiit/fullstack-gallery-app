import { create } from 'zustand';

interface Preview {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

const usePreview = create<Preview>((set) => ({
	isOpen: true,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false })
}));

export default usePreview;
