
type Icon = {
	name: string;
	_key: string;
	icon: string;
};

type Frontend = Icon[];
type Backend = Icon[];

export type Projects = {
	backgroundColor: string;
	thumbnail: string
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
		icon: string;
		_key: string;
		title: string;
		_type: string;
	}[];
	title: string;
	subTitle: string;
	_createdAt: string;
	design: string;
	mockup: string;
	_rev: string;
	type: string;
	learnings: string[];
	problem: {
		image: string;
		description: string;
	};
	_updateAt: string;
};

export type ImageResult = {
	fileKey: string;
	fileName: string;
	fileSize: number;
	fileUrl: string;
	key: string;
	name: string;
	size: number;
	url: string;
};
