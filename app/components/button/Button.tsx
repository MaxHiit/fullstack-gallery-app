import React, { ComponentPropsWithoutRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

export const button = tv({
	base: 'border-none text-white rounded-md px-4 py-2 flex gap-2 items-center justify-center',
	variants: {
		color: {
			primary: 'bg-blue-500 text-white',
			secondary: 'bg-gray-500 text-white'
		}
	}
});

type ButtonVariants = VariantProps<typeof button>;
type ButtonType = ComponentPropsWithoutRef<'button'>;

interface ButtonProps extends Omit<ButtonType, 'color'>, ButtonVariants {
	'aria-label': string;
	children: React.ReactNode;
}

const Button = ({ children, ...rest }: ButtonProps) => {
	return (
		<button className={button({ color: 'primary' })} {...rest}>
			{children}
		</button>
	);
};

export default Button;
