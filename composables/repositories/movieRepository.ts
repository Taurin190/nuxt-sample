import { NuxtAxiosInstance } from "@nuxtjs/axios";

const resource = '/movies'

export const MovieRepository = ($axios: NuxtAxiosInstance) => ({
    getCommingSoon() {
        return $axios.get(`${resource}/commingsoon`)
    },
    getCommingSoonWithCredit() {
        return $axios.get(`${resource}/commingsoon/detail`)
    },
    getShowing() {
        return $axios.get(`${resource}/showing`)
    },
    getShowingWithCredit() {
        return $axios.get(`${resource}/showing/detail`)
    },
    getMainVisual() {
        return $axios.get(`${resource}/main_visual`)
    }
});