'use client';

import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import useUploadModal from '@/app/hooks/useUploadModal';
import Modal from './Modal';
import Input from '../input/Input';
import Button from '../button/Button';

const UploadModal = () => {
	const router = useRouter();
	const pathname = usePathname();
	const uploadModal = useUploadModal();

	const [name, setName] = useState<string>('');
	const [selectedFile, setSelectedFile] = useState<File | null>(null);
	const inputFileRef = useRef<HTMLInputElement>(null);

	const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
		const newName = e.target.value;
		setName(newName);
	};

	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files;

		if (files && files.length > 0) {
			const file = files[0];
			console.log(file);

			setSelectedFile(file);
		}
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('name', name);
		if (selectedFile) {
			formData.append('file', selectedFile);
		}

		try {
			const _HOST = process.env.API_URL_BASE;

			const res = await fetch(`${_HOST}/images`, {
				method: 'POST',
				body: formData
			});

			if (!res.ok) {
				throw new Error('Something wrong !');
			}

			toast.success('Successfully uploaded !');
			router.replace(pathname);
			uploadModal.onClose();
		} catch (error: any) {
			toast.error(error.message);
		} finally {
			setName('');
			setSelectedFile(null);
			if (inputFileRef.current) {
				inputFileRef.current.value = '';
			}
		}
	};

	const handleCloseUploadModal = () => {
		uploadModal.onClose();
	};

	return (
		<Modal title='Upload your image' isOpen={uploadModal.isOpen} onClose={handleCloseUploadModal}>
			<form className='flex flex-col md:flex-row gap-3' onSubmit={handleSubmit}>
				<Input
					className='flex-1 shrink-1'
					type='text'
					name='image-name'
					placeholder='Image name'
					value={name}
					onChange={handleNameChange}
					required
				/>
				<Input
					className='flex-1 shrink-1 group'
					type='file'
					name='upload-image'
					ref={inputFileRef}
					filevariant={true}
					onChange={handleFileChange}
					required
				/>

				<Button aria-label='upload file button' color='primary' type='submit'>
					<span>upload image</span>
				</Button>
			</form>
		</Modal>
	);
};

export default UploadModal;
