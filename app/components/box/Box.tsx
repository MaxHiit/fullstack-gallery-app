import React, { HTMLAttributes, forwardRef } from 'react';

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
	className?: string;
}

const Box = forwardRef(function Box(
	{ className, children, ...rest }: BoxProps,
	ref: React.Ref<HTMLDivElement>
) {
	return (
		<div className={`bg-slate-100 rounded-md p-2 ${className}`} ref={ref} {...rest}>
			{children}
		</div>
	);
});

export default Box;
