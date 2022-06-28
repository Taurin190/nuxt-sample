import { MovieRepository } from "../repositories/movieRepository";
import { TheaterRepository } from "../repositories/theaterRepository";

export interface Repositories {
    movie: typeof MovieRepository
    theater: typeof TheaterRepository
}

const repositories: Repositories = {
    movie: MovieRepository,
    theater: TheaterRepository
}

export const apiRepositoryFactory = {
    get: (key: keyof Repositories) => repositories[key]
}