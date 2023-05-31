import { create } from 'zustand';
import { FilterOption } from '../types';

interface Filter {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
	onToggle: () => void;
	options: {
		sepia: number;
		gray: number;
	};
	setOption: (value: Filter['options']) => void;
	resetOptions: () => void;
}

const useFilter = create<Filter>((set) => ({
	isOpen: false,
	options: {
		sepia: 0,
		gray: 0
	},
	setOption: (value) => set({ options: value }),
	resetOptions: () =>
		set({
			options: {
				sepia: 0,
				gray: 0
			}
		}),
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
	onToggle: () => set((state) => ({ isOpen: !state.isOpen }))
}));

export default useFilter;
