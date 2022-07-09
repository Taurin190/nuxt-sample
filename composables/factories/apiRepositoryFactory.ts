import { MovieRepository } from "../repositories/movieRepository";
import { TheaterRepository } from "../repositories/theaterRepository";
import { EventRepository } from "../repositories/eventRepository";

export interface Repositories {
    movie: typeof MovieRepository
    theater: typeof TheaterRepository
    event: typeof EventRepository
}

const repositories: Repositories = {
    movie: MovieRepository,
    theater: TheaterRepository,
    event: EventRepository
}

export const apiRepositoryFactory = {
    get: (key: keyof Repositories) => repositories[key]
}