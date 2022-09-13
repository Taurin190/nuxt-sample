import { MovieRepository } from "../repositories/movieRepository";
import { TheaterRepository } from "../repositories/theaterRepository";
import { EventRepository } from "../repositories/eventRepository";
import { BannerRepository } from "../repositories/bannerRepository";
import { ServiceRepository } from "../repositories/serviceRepository";

export interface Repositories {
    movie: typeof MovieRepository
    theater: typeof TheaterRepository
    event: typeof EventRepository
    banner: typeof BannerRepository
    service: typeof ServiceRepository
}

const repositories: Repositories = {
    movie: MovieRepository,
    theater: TheaterRepository,
    event: EventRepository,
    banner: BannerRepository,
    service: ServiceRepository
}

export const apiRepositoryFactory = {
    get: (key: keyof Repositories) => repositories[key]
}