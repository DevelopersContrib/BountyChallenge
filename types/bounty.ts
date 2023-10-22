export type Poster = {
  name: string;
  image: string;
   _id?: number | string;
  _ref?: number | string;
};

export type Bounty = {
  _id: number;
  title: string;
  slug?: any;
  metadata?: string;
  body?: string;
  mainImage?: any;
  bfooter?: string;
  poster?: Poster;
  publishedAt?: string;
};
