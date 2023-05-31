import React, { ComponentPropsWithoutRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

export const button = tv({
	base:
		'text-white rounded-md px-4 py-2 flex gap-2 items-center justify-center transition-all duration-300 ease-in-out',
	variants: {
		color: {
			primary: 'border-none hover:bg-blue-800 bg-blue-500 text-white',
			secondary: 'bg-gray-500 text-white',
			icon:
				'w-fit p-1 text-slate-300 transition-all duration-300 ease-in-out group-hover:text-slate-300'
		},
		isTransparent: {
			true: 'bg-none'
		}
	}
});

type ButtonVariants = VariantProps<typeof button>;
type ButtonType = ComponentPropsWithoutRef<'button'>;

interface ButtonProps extends Omit<ButtonType, 'color'>, ButtonVariants {
	'aria-label': string;
	className?: string;
	children: React.ReactNode;
}

const Button = ({
	color = 'primary',
	isTransparent,
	children,
	className,
	...rest
}: ButtonProps) => {
	return (
		<button className={button({ color, isTransparent, className })} {...rest}>
			{children}
		</button>
	);
};

export default Button;
