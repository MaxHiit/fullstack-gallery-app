import { XMarkIcon } from '@heroicons/react/24/outline';
import Button from '../button/Button';

interface ModalHeaderProps {
	title: string;
	onClose: () => void;
}

const ModalHeader = ({ title, onClose }: ModalHeaderProps) => {
	const handleCloseModal = () => {
		onClose();
	};
	return (
		<div className='flex justify-between items-center'>
			<h3 className='font-semibold leading-6 text-gray-950'>{title}</h3>
			<Button
				aria-label='close edit panel'
				color='icon'
				className='group hover:bg-red-700'
				isTransparent
				onClick={handleCloseModal}
			>
				<XMarkIcon className='h-6 w-6 group-hover:text-slate-50 text-gray-950' />
			</Button>
		</div>
	);
};

export default ModalHeader;
