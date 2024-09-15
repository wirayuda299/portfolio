
export type Projects = {
  backgroundColor: string;
  thumbnail: string
  demoSite: string;
  techStacks: {
    name: string
    icon: string
  }[]
  challenges: string[];
  descriptions: string;
  sourceCode: string;
  title: string;
  subTitle: string;
  _createdAt: string;
  mockup: string;
  _id: string;
  _rev: string;
  type: string;
  learnings: string[];
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
