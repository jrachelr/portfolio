type BlogPost = {
  id: string;
  title: string;
  date: string;
};

type WorkSample = {
  id: number;
  title: string;
  year: number;
  company: string;
  type: string;
  src: string;
  name: string;
};

type workSamples = WorkSample[];
