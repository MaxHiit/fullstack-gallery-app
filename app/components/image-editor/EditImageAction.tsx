import { ArrowsPointingInIcon, SparklesIcon } from '@heroicons/react/24/outline';
import useEditor from '@/app/hooks/useEditor';
import usePreview from '@/app/hooks/usePreview';
import useFilter from '@/app/hooks/useFilter';
import Button from '../button/Button';

interface EditImageAction {
	handleEditorSave: () => void;
}

const EditImageAction = ({ handleEditorSave }: EditImageAction) => {
	const editor = useEditor();
	const preview = usePreview();
	const filter = useFilter();

	const handleOpenEditor = () => {
		if (filter.isOpen) {
			filter.onClose();
		}
		if (preview.isOpen) {
			preview.onClose();
		} else {
			preview.onOpen();
		}
		editor.onToggle();
	};

	const handleOpenFilter = () => {
		if (editor.isOpen) {
			editor.onClose();
		}
		if (!preview.isOpen) {
			preview.onOpen();
		}

		if (!filter.isOpen) {
			filter.resetOptions();
		}

		filter.onToggle();
	};

	return (
		<div className='flex items-center mt-4'>
			<div className='flex items-center gap-3 flex-1 justify-start md:justify-center'>
				<Button
					aria-label='filter button'
					color='secondary'
					type='button'
					className={`group rounded-full p-2  border border-blue-500 ${
						filter.isOpen ? 'bg-blue-500 text-slate-300' : 'bg-transparent text-blue-500 '
					}`}
					onClick={handleOpenFilter}
				>
					<SparklesIcon className='h-5 w-5' />
				</Button>
				<Button
					aria-label='crop and resize button'
					color='secondary'
					type='button'
					className={`group rounded-full p-2 border border-blue-500 ${
						editor.isOpen ? 'bg-blue-500 ' : 'bg-transparent text-blue-500'
					}`}
					onClick={handleOpenEditor}
				>
					<ArrowsPointingInIcon className='h-5 w-5' />
				</Button>
			</div>

			{(editor.isOpen || filter.isOpen) && (
				<Button aria-label='save edit button' onClick={handleEditorSave}>
					Save
				</Button>
			)}
		</div>
	);
};

export default EditImageAction;
