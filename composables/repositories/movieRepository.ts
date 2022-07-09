import { NuxtAxiosInstance } from "@nuxtjs/axios";

const resource = '/movies'

export const MovieRepository = ($axios: NuxtAxiosInstance) => ({
    getCommingSoon() {
        return $axios.get(`${resource}/commingsoon`)
    },
    getShowing() {
        return $axios.get(`${resource}/showing`)
    },
    getMainVisual() {
        return $axios.get(`${resource}/main_visual`)
    }
});