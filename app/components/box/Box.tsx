import React from 'react';

interface BoxProps {
	children: React.ReactNode;
	className?: string;
}

const Box = ({ className, children, ...rest }: BoxProps) => {
	return (
		<div className={`bg-slate-100 rounded-md p-2 ${className}`} {...rest}>
			{children}
		</div>
	);
};

export default Box;
