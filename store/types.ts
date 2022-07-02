export interface RootState {
    version: string;
}

export interface CommingSoonMovieState {
    movies: Movie[];
}

export interface ShowingMovieState {
    movies: Movie[];
}

export interface Movie {
    id: number;
    title: string;
    ename: string;
    thumnail_name: string;
}

export interface TheaterList {
    theaters: Theater[];
}

export interface Theater {
    id: number;
    name: string;
    link: string;
    area: string;
}