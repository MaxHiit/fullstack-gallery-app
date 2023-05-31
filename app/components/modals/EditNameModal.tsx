'use client';

import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import useEditNameModal from '@/app/hooks/useEditNameModal';
import Modal from './Modal';
import Input from '../input/Input';
import Button from '../button/Button';

const EditNameModal = () => {
	const router = useRouter();
	const pathname = usePathname();
	const editNameModal = useEditNameModal();

	const { name, _id } = editNameModal.image;
	const [nameValue, setNameValue] = useState('');

	const handleCloseEditNameModal = () => {
		editNameModal.onClose();
	};

	const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
		const newName = e.target.value;
		setNameValue(newName);
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!nameValue) {
			toast.error('The name field is required');
		}

		if (nameValue === name) {
			toast.error("The name hasn't changed");
			return;
		}
		const formData = new FormData();
		formData.append('name', nameValue);
		formData.append('file', '');

		try {
			const _HOST = process.env.API_URL_BASE;

			const res = await fetch(`${_HOST}/images/${_id}`, {
				method: 'PUT',
				body: formData
			});

			if (!res.ok) {
				throw new Error('Something wrong !');
			}

			toast.success('Successful name update !');
			router.replace(pathname);
			setTimeout(() => {
				editNameModal.onClose();
			}, 300);
		} catch (error: any) {
			toast.error(error.message);
		} finally {
			editNameModal.image = {
				url: '',
				name: '',
				_id: ''
			};
			setNameValue(name ?? '');
		}
	};

	useEffect(() => {
		setNameValue(name ?? '');
	}, [name]);

	return (
		<Modal title='Edit image name' isOpen={editNameModal.isOpen} onClose={handleCloseEditNameModal}>
			<form className='flex flex-col md:flex-row gap-3' onSubmit={handleSubmit}>
				<Input
					className='flex-1 shrink-1'
					type='text'
					name='image-name'
					placeholder='Image name'
					value={nameValue}
					onChange={handleNameChange}
					required
				/>

				<Button aria-label='upload name button' color='primary' type='submit'>
					<span>Save change</span>
				</Button>
			</form>
		</Modal>
	);
};

export default EditNameModal;
