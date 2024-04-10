type BlogPost = {
  id: string;
  title: string;
  date: string;
};

type WorkSample = {
  id: string;
  title: string;
  year: string;
  company: string;
  type: string;
  src: string;
  name: string;
  image: string;
  description: string[];
};

type workSamples = WorkSample[];
