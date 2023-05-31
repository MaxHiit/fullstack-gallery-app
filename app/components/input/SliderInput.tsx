import { ChangeEvent, useEffect, useState } from 'react';
import { FilterOption } from '@/app/types';
import useFilter from '@/app/hooks/useFilter';
import Input from './Input';

interface SliderInPutProps {
	slide: FilterOption;
}

const SliderInput = ({ slide }: SliderInPutProps) => {
	const { label, defaultValue, field, min, max, step } = slide;
	const [value, setValue] = useState(defaultValue);

	const filter = useFilter();

	const handleSliderValue = (e: ChangeEvent<HTMLInputElement>) =>
		setValue(parseFloat(e.target.value));

	useEffect(() => {
		filter.setOption({ ...filter.options, [field]: value });
	}, [value]);

	return (
		<Input
			type='range'
			name={field}
			label={label}
			rangeVariant={true}
			min={min}
			max={max}
			step={step}
			value={value}
			onChange={handleSliderValue}
		/>
	);
};

export default SliderInput;
