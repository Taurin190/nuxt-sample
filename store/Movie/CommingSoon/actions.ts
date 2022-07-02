import { ActionTree } from 'vuex';
import { CommingSoonMovieState, RootState, Movie } from '@/store/types';
import { defineComponent, useContext, useAsync } from '@nuxtjs/composition-api'

const actions: ActionTree<CommingSoonMovieState, RootState> = {
    get: async ({ commit }) => {
        const { app } = useContext()
        const movies = useAsync(async () => {
            const response = await app.$repositories('movie').getCommingSoon()
            return response.data
        })
        commit('set', movies);
        return true;
    },
};

export default actions;