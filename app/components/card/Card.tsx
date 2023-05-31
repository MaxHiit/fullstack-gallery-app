/* eslint-disable @next/next/no-img-element */

'use client';

import { useCallback, useState } from 'react';
import Image from 'next/image';
import { ImageType } from '@/app/types';
import { PaintBrushIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
import useEditImageModal from '@/app/hooks/useEditImageModal';
import useEditNameModal from '@/app/hooks/useEditNameModal';
import useUploadModal from '@/app/hooks/useUploadModal';
import CardInfo from './CardInfo';
import EditButton from './EditButton';
import DownloadButton from './DownloadButton';

interface CardProps {
	image: ImageType;
}

const Card = ({ image }: CardProps) => {
	const { url, name, _id, contentType, createdAt } = image;
	const [isLoading, setLoading] = useState(true);

	const uploadModal = useUploadModal();
	const editNameModal = useEditNameModal();
	const editImageModal = useEditImageModal();

	const handleOpenEditModal = useCallback(
		(modalToOpen: string) => {
			uploadModal.onClose();

			if (modalToOpen === 'nameModal') {
				editNameModal.image = { name, _id };
				editImageModal.onClose();
				editNameModal.onOpen();
			}

			if (modalToOpen === 'imageModal') {
				editImageModal.image = { _id, url, contentType };
				editNameModal.onClose();
				editImageModal.onOpen();
			}
		},
		[editNameModal, uploadModal, editImageModal]
	);

	return (
		<div>
			<div className='relative md:group'>
				<div className='px-3 mb-3'>
					<CardInfo name={name ?? ''} createdAt={createdAt} />
				</div>
				<div className='w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden lg:aspect-w-7 lg:aspect-h-8 relative'>
					<Image
						src={url ?? ''}
						alt={name ?? ''}
						fill
						className={`duration-700 ease-in-out'  ${
							isLoading ? 'grayscale blur-2xl scale-110' : 'grayscale-0 blur-0 scale-100'
						}`}
						onLoadingComplete={() => setLoading(false)}
					/>
				</div>
				<div className='flex justify-between px-3 mt-3'>
					<div className='flex gap-3'>
						<EditButton handleClick={() => handleOpenEditModal('nameModal')}>
							<PencilSquareIcon className='h-5 w-5 text-slate-300 transition-all duration-300 ease-in-out group-hover:text-slate-300' />
						</EditButton>
						<EditButton handleClick={() => handleOpenEditModal('imageModal')}>
							<PaintBrushIcon className='h-5 w-5 text-slate-300 transition-all duration-300 ease-in-out group-hover:text-slate-300' />
						</EditButton>
					</div>
					<DownloadButton imageUrl={url ?? ''} imageName={name ?? ''} />
				</div>
			</div>
		</div>
	);
};

export default Card;
