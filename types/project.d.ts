type Projects = {
	backgroundColor: string;
	thumbnail: SanityImage;
	demoSite: string;
	techStacks: [
		{
			_type: string;
			_key: string;
			frontend: [
				{
					_type: string;
					_key: string;
					name: string;
					icon: SanityImage;
				}
			];
			backend: [
				{
					_type: string;
					_key: string;
					name: string;
					icon: SanityImage;
				}
			];
		}
	];
	challenges: string[];
	descriptions: string;
	sourceCode: string;
	projectInfo: {
		endDate: string;
		_type: string;
		_key: string;
		startDate: string;
		role: string;
	}[];
	_id: string;
	process: {
		icon: SanityImage;
		_key: string;
		title: string;
		_type: string;
	}[];
	title: string;
	subTitle: string;
	_createdAt: string;
	design: Image;
	mockup: Image;
	_rev: string;
	type: string;
	learnings: string[];
	problem: {
		image: Image;
		description: string;
	};
	_updateAt: string;
};

type ImageResult = {
	fileKey: string;
	fileName: string;
	fileSize: number;
	fileUrl: string;
	key: string;
	name: string;
	size: number;
	url: string;
};
