export default {
    SET_SEARCH_VALUE_TO_VUEX: (state, value) => {
        state.searchValue = value;
    },
    SET_RESULTS_TO_STATE: (state, results) => {
            state.results = results;
        }
}