import { NuxtAxiosInstance } from "@nuxtjs/axios";

const resource = '/events'

export const EventRepository = ($axios: NuxtAxiosInstance) => ({
    get() {
        return $axios.get(`${resource}`)
    }
});