import { NuxtAxiosInstance } from "@nuxtjs/axios";

const resource = '/services'

export const ServiceRepository = ($axios: NuxtAxiosInstance) => ({
    getTheaterService() {
        return $axios.get(`${resource}/theater`)
    }
});