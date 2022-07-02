import { Module } from 'vuex';
import { CommingSoonMovieState, RootState } from '@/store/types';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const state: CommingSoonMovieState = {
    movies: [],
};

export const CommingSoon: Module<CommingSoonMovieState, RootState> = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};