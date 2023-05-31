import { create } from 'zustand';

interface Editor {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
	onToggle: () => void;
}

const useEditor = create<Editor>((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
	onToggle: () => set((state) => ({ isOpen: !state.isOpen }))
}));

export default useEditor;
