import Button from '../button/Button';

interface EditButtonProps {
	handleClick: () => void;
	children: React.ReactNode;
}

const EditButton = ({ handleClick, children }: EditButtonProps) => {
	return (
		<Button
			aria-label='download image'
			color='icon'
			className='group bg-slate-400 bg-opacity-25'
			onClick={handleClick}
		>
			{children}
		</Button>
	);
};

export default EditButton;
