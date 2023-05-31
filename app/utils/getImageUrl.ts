const getImageUrl = async (imageUrl: string) => {
	if (!imageUrl) {
		console.error('Aucune image à enregistrer');
		return;
	}

	const response = await fetch(imageUrl);
	const blob = await response.blob();
	const url = window.URL.createObjectURL(blob);

	return url;
};

export default getImageUrl;
