'use client';

import { useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import AvatarEditor from 'react-avatar-editor';
import { toast } from 'react-hot-toast';
import useEditImageModal from '@/app/hooks/useEditImageModal';
import usePreview from '@/app/hooks/usePreview';
import useEditor from '@/app/hooks/useEditor';
import useFilter from '@/app/hooks/useFilter';
import Modal from './Modal';
import EditImagePreview from '../image-editor/EditImagePreview';
import Editor from '../image-editor/Editor';
import Filter from '../image-editor/Filter';
import EditImageAction from '../image-editor/EditImageAction';

const EditImageModal = () => {
	const editImageModal = useEditImageModal();
	const preview = usePreview();
	const editor = useEditor();
	const filter = useFilter();

	const router = useRouter();
	const pathname = usePathname();

	const editorRef = useRef<AvatarEditor | null>(null);
	const imagePreviewRef = useRef<HTMLImageElement | null>(null);

	const handleCloseEditImageModal = () => {
		filter.onClose();
		editor.onClose();
		editImageModal.onClose();
	};

	const handleEditorSave = async () => {
		let url;

		// send editor file
		if (editor.isOpen) {
			const canvas = editorRef?.current?.getImage();
			url = canvas?.toDataURL(editImageModal.image.contentType);
		}

		// send filter file
		if (filter.isOpen) {
			if (!imagePreviewRef.current) return null;
			url = imagePreviewRef.current.src;
		}

		if (!url) {
			console.log('Aucune image à enregistrer');
			return;
		}

		const response = await fetch(url);
		const blob = await response.blob();

		const formData = new FormData();
		formData.append('name', editImageModal.image.name ?? '');
		formData.append('file', blob);

		try {
			const _HOST = process.env.API_URL_BASE;

			const res = await fetch(`${_HOST}/images/${editImageModal.image._id}`, {
				method: 'PUT',
				body: formData
			});

			if (!res.ok) {
				throw new Error('Something wrong !');
			}

			toast.success('Successful name update !');
			router.replace(pathname);
			editImageModal.onClose;
		} catch (error: any) {
			toast.error(error.message);
		} finally {
		}
	};

	return (
		<>
			<Modal
				title='Edit your image'
				isOpen={editImageModal.isOpen}
				onClose={handleCloseEditImageModal}
			>
				{preview.isOpen && <EditImagePreview ref={imagePreviewRef} />}
				{editor.isOpen && <Editor ref={editorRef} image={editImageModal.image.url ?? ''} />}
				{filter.isOpen && <Filter />}

				<EditImageAction handleEditorSave={handleEditorSave} />
			</Modal>
		</>
	);
};

export default EditImageModal;
