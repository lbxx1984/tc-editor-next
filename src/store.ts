import {InjectionKey} from 'vue';
import {createStore, Store} from 'vuex';
import {State} from '@/types/store';

export const storeKey: InjectionKey<Store<State>> = Symbol('rootStore');

export const store = createStore<State>({
    state: {
        count: 8848
    },
    mutations: {
        increment(state, ext: number) {
            state.count = state.count + ext;
        }
    }
});
