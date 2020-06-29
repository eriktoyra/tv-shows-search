export type ShowPoster = {
  medium: string;
  original: string;
};

export type Network = {
  id: number;
  name: string;
};

export type Rating = {
  average: number;
};

export interface IShowDetails {
  id?: number;
  url?: string;
  name?: string;
  image: ShowPoster;
  language: string;
  network: Network;
  summary: string;
  rating: Rating;
}

export interface ISearchResult {
  score?: number;
  show: IShowDetails;
}
