

export interface MovieResults {
  content: MovieInterface[];
  totalElements: number;
  totalPages: number;
}

export interface MovieInterface {
  id: string;
  year: string;
  title: string;
  studios: string[];
  producers: string[];
  winner: boolean;
}

export interface MovieMultipleYearsResults {
  years: MovieMultipleYears[];
}

export interface MovieMultipleYears {
  year: string;
  winnerCount: string;
}

export interface MovieIntervalResults {
  min: MovieIntervalItem[];
  max: MovieIntervalItem[];
}

export interface MovieIntervalItem {
  producer: string;
  interval: number;
  previousWin: number;
  followingWin: number;
}
export interface MovieTopResults {
  studios: MovieTopItem[];
}

export interface MovieTopItem {
  name: string;
  winCount: string;
}

