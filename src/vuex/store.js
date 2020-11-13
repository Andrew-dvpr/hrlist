import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        results: []
    },
    mutations: {
        SET_RESULTS_TO_STATE: (state, results) => {
            state.results = results;
        }
    },
    actions: {
        GET_RESULTS_FROM_API({commit}) {
            return axios('https://randomuser.me/api/?&results=20&seed=abc&inc=name,login,dob,picture&noinfo', {
                method: "GET"
            })
            .then((results) => {
                commit('SET_RESULTS_TO_STATE', results.data.results);
                return results;
            })
            .catch((error) => {
                console.log(error);
                return error;
            })
        }
    },
    getters: {
        RESULTS(state) {
            return state.results;
        }
    },
});

export default store;