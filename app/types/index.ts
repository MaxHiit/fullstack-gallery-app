export type ImageType = {
	url?: string;
	name?: string;
	_id: string;
	contentType?: string;
	createdAt: string;
};

export type FilterOption = {
	label: string;
	field: string;
	defaultValue: number;
	min: number;
	max: number;
	step: number;
};
