import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import { CommingSoon } from './Movie/CommingSoon';

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0',
  },
  modules: {
    CommingSoon,
  },
};

export default new Vuex.Store<RootState>(store);