import Image from 'next/image';
import { useState } from 'react';
import useEditImageModal from '@/app/hooks/useEditImageModal';
import useFilter from '@/app/hooks/useFilter';

const EditImagePreview = () => {
	const [isLoading, setLoading] = useState(true);

	const editImageModal = useEditImageModal();
	const filter = useFilter();

	const filterStyle = {
		filter: `sepia(${filter.options.sepia}%) grayScale(${filter.options.gray}%)`
	};

	return (
		<>
			<div className='w-full h-96 sm:h-[400px] overflow-hidden rounded-lg relative'>
				<Image
					src={editImageModal.image.url ?? ''}
					alt={editImageModal.image.url ?? 'default alt image'}
					fill
					style={filter.isOpen ? filterStyle : {}}
					className={`object-contain duration-700 ease-in-out'  ${
						isLoading ? 'grayscale blur-2xl scale-110' : 'grayscale-0 blur-0 scale-100'
					}`}
					onLoadingComplete={() => setLoading(false)}
				/>
			</div>
		</>
	);
};

export default EditImagePreview;
