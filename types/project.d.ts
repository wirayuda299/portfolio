type Icon = {
	name: string;
	_key: string;
	icon: string;
};

type Frontend = Icon[];
type Backend = Icon[];

type Projects = {
	backgroundColor: string;
	thumbnail: SanityImage;
	demoSite: string;
	techStacks: {
		frontend: Frontend;
		backend: Backend;
	};
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
