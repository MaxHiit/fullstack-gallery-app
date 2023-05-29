import { create } from 'zustand';

interface UploadModalStore {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
	onToggle: () => void;
}

const useUploadModal = create<UploadModalStore>((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
	onToggle: () => set((state) => ({ isOpen: !state.isOpen }))
}));

export default useUploadModal;
