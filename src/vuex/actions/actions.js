import axios from "axios";

export default {
GET_SEARCH_VALUE_TO_VUEX ({commit}, value) {
    commit('SET_SEARCH_VALUE_TO_VUEX', value)
},
GET_RESULTS_FROM_API({commit}) {
    return axios('https://randomuser.me/api/?&results=1000&seed=abc&inc=name,login,dob,picture&noinfo', {
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
}