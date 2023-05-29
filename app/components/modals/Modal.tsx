'use client';

import { useCallback, useEffect, useState } from 'react';
import Box from '../box/Box';
import ModalHeader from './ModalHeader';

interface ModalProps {
	title: string;
	isOpen?: boolean;
	onClose: () => void;
	children: React.ReactNode;
}

const Modal = ({ title, isOpen, onClose, children }: ModalProps) => {
	const [showModal, setShowModal] = useState(isOpen);

	const handleCloseEscapeKey = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				setShowModal(false);
				setTimeout(() => {
					onClose();
				}, 300);
			}
		},
		[onClose]
	);

	const handleCloseButton = useCallback(() => {
		setShowModal(false);
		setTimeout(() => {
			onClose();
		}, 300);
	}, [onClose]);

	useEffect(() => {
		setShowModal(isOpen);
	}, [isOpen]);

	useEffect(() => {
		window.addEventListener('keydown', handleCloseEscapeKey);

		return () => {
			window.removeEventListener('keydown', handleCloseEscapeKey);
		};
	});

	if (!isOpen) {
		return null;
	}

	return (
		<Box
			className={`max-w-5xl w-[80%] fixed z-20 transition-all duration-300 ${
				showModal ? 'bottom-6' : '-bottom-52'
			} left-1/2 -translate-x-1/2`}
		>
			<ModalHeader title={title} onClose={handleCloseButton} />

			{children}
		</Box>
	);
};

export default Modal;
