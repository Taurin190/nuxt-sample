import { MutationTree } from 'vuex';
import { CommingSoonMovieState, Movie } from '@/store/types';

const mutations: MutationTree<CommingSoonMovieState> = {
  set: (state, CommingSoon: CommingSoonMovieState) => {
    state.movies.slice(0);
    state.movies.concat(CommingSoon.movies);
  },
};

export default mutations;