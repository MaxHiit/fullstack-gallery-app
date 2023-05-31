import { toast } from 'react-hot-toast';
import getImageUrl from '@/app/utils/getImageUrl';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import Button from '../button/Button';

interface DownloadButtonProps {
	imageUrl: string;
	imageName: string;
}

const DownloadButton = ({ imageUrl, imageName }: DownloadButtonProps) => {
	const handleDownload = async () => {
		try {
			const url = await getImageUrl(imageUrl);

			if (url) {
				const anchor = document.createElement('a');
				anchor.href = url;
				anchor.download = imageName;
				anchor.style.display = 'none';
				document.body.appendChild(anchor);
				anchor.click();
				document.body.removeChild(anchor);
			}
		} catch (error) {
			toast.error('Error downloading image:');
		}
	};

	return (
		<Button
			aria-label='download image'
			color='icon'
			isTransparent
			className='group hover:bg-slate-400 hover:bg-opacity-25'
			onClick={handleDownload}
		>
			<ArrowDownTrayIcon className='h-5 w-5 text-slate-300 transition-all duration-300 ease-in-out group-hover:text-slate-300' />
			<span className='text-slate-300 transition-all duration-300 ease-in-out group-hover:text-slate-300'>
				Download
			</span>
		</Button>
	);
};

export default DownloadButton;
