

export interface MovieResults {
  content: MovieInterface[];
  totalElements: number;
  totalPages: number;
}

export interface MovieInterface {
  id: string,
  year: string,
  title: string,
  studios: string[],
  producers: string[],
  winner: boolean
}


