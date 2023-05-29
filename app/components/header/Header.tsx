'use client';

import { useCallback } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';
import useUploadModal from '@/app/hooks/useUploadModal';
import Logo from './Logo';
import Button from '../button/Button';

const Header = () => {
	const uploadModal = useUploadModal();

	const handleToggleUploadModal = useCallback(() => {
		uploadModal.onToggle();
	}, [uploadModal]);

	return (
		<header className='sticky top-0 z-10 bg-black mx-auto max-w-container px-4 sm:px-6 lg:px-8'>
			<nav className='flex items-center justify-between p-4 lg:px-8'>
				<div className='flex lg:flex-1'>
					<Logo />
				</div>
				<div className='flex flex-1 justify-end'>
					<Button aria-label='open upload bar button' color='primary' onClick={handleToggleUploadModal}>
						<PlusIcon
							className={`h-6 w-6 transition-transform duration-500 ${
								uploadModal.isOpen ? 'rotate-45' : 'rotate-0'
							}`}
						/>

						<span>{uploadModal.isOpen ? 'Close' : 'Add a image'} </span>
					</Button>
				</div>
			</nav>
		</header>
	);
};

export default Header;
