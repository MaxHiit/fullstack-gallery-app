'use client';

import Logo from './Logo';
import Button from '../button/Button';
import { PlusIcon } from '@heroicons/react/24/outline';
import { useContext } from 'react';
import { AppStateContext } from '@/app/context/AppStateContext';

const Header = () => {
	const { isOpen, setIsOpen } = useContext(AppStateContext);

	const handleOpenUploadBar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header className='sticky top-0 z-10 bg-black mx-auto max-w-container px-4 sm:px-6 lg:px-8'>
			<nav className='flex items-center justify-between p-4 lg:px-8'>
				<div className='flex lg:flex-1'>
					<Logo />
				</div>
				<div className='flex flex-1 justify-end'>
					<Button aria-label='open upload bar button' color='primary' onClick={handleOpenUploadBar}>
						<PlusIcon
							className={`h-6 w-6 transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}
						/>

						<span>{isOpen ? 'Close' : 'Add a image'} </span>
					</Button>
				</div>
			</nav>
		</header>
	);
};

export default Header;
