'use client';

import { useEffect, useState } from 'react';

import UploadModal from '../components/modals/UploadModal';
import EditNameModal from '../components/modals/EditNameModal';
import EditImageModal from '../components/modals/EditImageModal';

const ModalProvider = () => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) return null;

	return (
		<>
			<UploadModal />
			<EditNameModal />
			<EditImageModal />
		</>
	);
};

export default ModalProvider;
