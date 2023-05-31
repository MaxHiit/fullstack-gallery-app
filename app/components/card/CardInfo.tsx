import { formatDistanceToNowStrict } from 'date-fns';

interface CardInfoProps {
	name: string;
	createdAt: string;
}

const CardInfo = ({ name, createdAt }: CardInfoProps) => {
	const imageDate = new Date(createdAt);
	const formatedDate = formatDistanceToNowStrict(imageDate, {
		addSuffix: true
	});

	return (
		<div className='flex flex-col'>
			<h3 className='text-sm text-slate-100'>{name}</h3>
			<p className='mt-1 text-xs font-medium text-[#767676] opacity-90'>{formatedDate}</p>
		</div>
	);
};

export default CardInfo;
