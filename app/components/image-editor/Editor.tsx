import { ChangeEvent, forwardRef, useState } from 'react';
import AvatarEditor, { AvatarEditorProps } from 'react-avatar-editor';
import { ArrowUturnLeftIcon, ArrowUturnRightIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Input from '../input/Input';
import Button from '../button/Button';

interface EditorProps extends AvatarEditorProps {
	image: string;
}

const Editor = forwardRef<AvatarEditor, EditorProps>(function Editor({ image }, ref) {
	const [scale, setScale] = useState(1);
	const [rotation, setRotation] = useState(0);
	const [crop, setCrop] = useState({
		width: 250,
		height: 250
	});

	const canvaStyle = {
		width: '100%',
		height: '100%'
	};
	const canvaBg = [241, 245, 249, 0.8];

	const handleCropChange = (e: ChangeEvent<HTMLInputElement>) => {
		const parsedToNumber = parseFloat(e.target.value);
		const target = e.target.name;

		setCrop({ ...crop, [target]: parsedToNumber });
	};

	const handleRotateRight = () => {
		setRotation((prevRotation) => prevRotation + 90);
	};

	const handleRotateLeft = () => {
		setRotation((prevRotation) => prevRotation - 90);
	};

	return (
		<div className='flex flex-col md:flex-row md:gap-5'>
			<div className='md:w-[500px] md:h-[500px] w-full h-full max-h-[500px]  overflow-hidden'>
				<AvatarEditor
					ref={ref}
					image={image}
					width={crop.width}
					height={crop.height}
					border={50}
					color={canvaBg}
					scale={scale}
					rotate={rotation}
					style={canvaStyle}
					crossOrigin='anonymous'
				/>
			</div>

			<div className='my-4 flex flex-col gap-4'>
				{/* SCALE CONTROLE */}
				<Input
					type='range'
					name='scale'
					label='Zoom'
					rangeVariant={true}
					min='1'
					max='2'
					step='0.01'
					value={scale}
					onChange={(e) => setScale(parseFloat(e.target.value))}
				/>

				{/* RESIZE WIDTH */}
				<div className='flex flex-col'>
					<p className='font-medium leading-4 text-black mb-3'>Resize (width x height)</p>
					<div className='flex items-center justify-between gap-3'>
						<Input
							type='number'
							name='width'
							// numberVariants={true}
							min='200'
							max='300'
							step='10'
							value={crop.width}
							onChange={handleCropChange}
						/>

						<XMarkIcon className='h-9 w-9 text-gray-950' />
						<Input
							type='number'
							name='height'
							// numberVariants={true}
							min='200'
							max='300'
							step='10'
							value={crop.height}
							onChange={handleCropChange}
						/>
					</div>
				</div>

				{/* ROTATE */}
				<div className='flex flex-col'>
					<p className='font-medium leading-4 text-black mb-3'>Rotate</p>
					<div className='flex items-center gap-3'>
						<Button
							aria-label='rotate minus 90deg'
							type='button'
							color='secondary'
							className='flex-1'
							onClick={handleRotateLeft}
						>
							<ArrowUturnLeftIcon className='h-6 w-6' />
						</Button>

						<Button
							aria-label='rotate minus 90deg'
							type='button'
							color='secondary'
							className='flex-1'
							onClick={handleRotateRight}
						>
							<ArrowUturnRightIcon className='h-6 w-6' />
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
});

export default Editor;
