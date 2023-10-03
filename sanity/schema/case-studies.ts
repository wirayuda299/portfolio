export default {
	name: 'caseStudies',
	title: 'CaseStudies',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'difficulty',
			title: 'Difficulty',
			type: 'number',
		},
		{
			name: 'subTitle',
			title: 'SubTitle',
			type: 'string',
		},
		{
			name: 'thumbnail',
			title: 'Thumbnail',
			type: 'image',
			option: { hotspot: true },
		},
		{
			name: 'mockup',
			title: 'Mockup',
			type: 'image',
		},
		{
			name: 'backgroundColor',
			title: 'BackgroundColor',
			type: 'string',
		},
		{
			name: 'demoSite',
			title: 'DemoSite',
			type: 'string',
		},
		{
			name: 'sourceCode',
			title: 'SourceCode',
			type: 'string',
		},
		{
			name: 'projectInfo',
			title: 'ProjectInfo',
			type: 'array',
			of: [
				{
					type: 'document',
					fields: [
						{
							name: 'role',
							title: 'Role',
							type: 'string',
						},
						{
							name: 'startDate',
							title: 'StartDate',
							type: 'string',
						},
						{
							name: 'endDate',
							title: 'EndDate',
							type: 'string',
						},
					],
				},
			],
		},
		{
			name: 'techStacks',
			title: 'TechStacks',
			type: 'array',
			of: [
				{
					type: 'document',
					fields: [
						{
							name: 'frontend',
							title: 'Frontend',
							type: 'array',
							of: [
								{
									type: 'document',
									fields: [
										{
											name: 'name',
											title: 'Name',
											type: 'string',
										},
										{
											name: 'icon',
											title: 'Icon',
											type: 'image',
										},
									],
								},
							],
						},
						{
							name: 'backend',
							title: 'Backend',
							type: 'array',
							of: [
								{
									type: 'document',
									fields: [
										{
											name: 'name',
											title: 'Name',
											type: 'string',
										},
										{
											name: 'icon',
											title: 'Icon',
											type: 'image',
										},
									],
								},
							],
						},
					],
				},
			],
		},
		{
			name: 'descriptions',
			title: 'Descriptions',
			type: 'string',
		},
		{
			name: 'problem',
			title: 'Problem',
			type: 'array',
			of: [
				{
					type: 'document',
					fields: [
						{
							name: 'description',
							title: 'Description',
							type: 'string',
						},
						{
							name: 'image',
							title: 'Image',
							type: 'image',
						},
					],
				},
			],
		},
		{
			name: 'design',
			title: 'Design',
			type: 'image',
		},
		{
			name: 'process',
			title: 'Process',
			type: 'array',
			of: [
				{
					type: 'document',
					fields: [
						{
							name: 'title',
							title: 'Title',
							type: 'string',
						},
						{
							name: 'icon',
							title: 'Icon',
							type: 'image',
						},
					],
				},
			],
		},
		{
			name: 'challenges',
			title: 'Challenges',
			type: 'array',
			of: [{ type: 'string' }],
		},
		{
			name: 'learnings',
			title: 'Learnings',
			type: 'array',
			of: [{ type: 'string' }],
		},
	],
};
