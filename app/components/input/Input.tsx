import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';
import { VariantProps, tv } from 'tailwind-variants';

export const input = tv({
	base:
		'w-full bg-transparent border-2 border-solid border-blue-500 rounded-md px-4 py-2 text-black placeholder:text-gray-light hover:border-blue-800 transition-all duration-300 ease-in-out',
	variants: {
		filevariant: {
			true:
				'p-0 file:h-full file:cursor-pointer group-hover:file:bg-blue-800 file:px-4 file:py-2 file:bg-blue-500 file:text-white file:border-none file:me-4'
		},
		rangeVariant: {
			true: 'w-ful h-2 bg-gray-200 border-none p-0 rounded-lg appearance-none cursor-pointer'
		}
	}
});

type InputVariant = VariantProps<typeof input>;

interface InputProps extends InputHTMLAttributes<HTMLInputElement>, InputVariant {
	label?: string;
	name?: string;
	placeholder?: string;
	className?: string;
}

const Input = forwardRef(function Input(
	{
		filevariant = false,
		rangeVariant = false,
		label,
		name,
		placeholder,
		className,
		...rest
	}: InputProps,
	ref: ForwardedRef<HTMLInputElement>
) {
	return (
		<div className={`flex flex-col gap-3 w-full ${className ? className : ''}`}>
			{label && (
				<label htmlFor={name} className='font-medium leading-4 text-black'>
					{label}
				</label>
			)}
			<input
				className={input({ filevariant: filevariant, rangeVariant })}
				name={name}
				ref={ref}
				{...rest}
				placeholder={placeholder}
			/>
		</div>
	);
});

export default Input;
