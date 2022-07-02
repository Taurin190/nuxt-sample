import { GetterTree } from 'vuex';
import { CommingSoonMovieState, RootState } from '@/store/types';

const getters: GetterTree<CommingSoonMovieState, RootState> = {
  size: (state: CommingSoonMovieState) => {
    return state.movies.length;
  },
};

export default getters;