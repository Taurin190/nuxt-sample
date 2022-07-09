import { NuxtAxiosInstance } from "@nuxtjs/axios";

const resource = '/banners'

export const BannerRepository = ($axios: NuxtAxiosInstance) => ({
    get() {
        return $axios.get(`${resource}`)
    }
});