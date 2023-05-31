import { FilterOption } from '@/app/types';
import Box from '../box/Box';
import FiltreSlider from './FiltreSlider';

const Filter = () => {
	const filterOptions: FilterOption[] = [
		{ label: 'Sepia', defaultValue: 0, field: 'sepia', min: 0, max: 200, step: 1 },
		{ label: 'Gray Scale', defaultValue: 0, field: 'gray', min: 0, max: 200, step: 1 }
	];

	return (
		<Box className='rounded-none'>
			{filterOptions.map((filter) => (
				<div className='mt-4' key={filter.field}>
					<FiltreSlider slide={filter} />
				</div>
			))}
		</Box>
	);
};

export default Filter;
