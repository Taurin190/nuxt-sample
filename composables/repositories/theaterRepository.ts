import { NuxtAxiosInstance } from "@nuxtjs/axios";

const resource = '/theaters'

export const TheaterRepository = ($axios: NuxtAxiosInstance) => ({
    get() {
        return $axios.get(`${resource}`)
    }
});