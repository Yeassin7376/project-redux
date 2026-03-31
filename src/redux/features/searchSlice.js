import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        query: "",
        activeTabs: "photos",
        results: [],
        loading: false,
        error: null
    },
    reducers: {
        setQuery(state, action) {
            state.query = action.payload
        },
        setActiveTabs(state, action) {
            state.activeTabs = action.payload
        },
        setResults(state, action) {
            state.results = action.payload
        },
        setLoading(state, action) {
            state.loading = action.payload
        },
        setError(state, action) {
            state.error = action.payload
        },
    }
})

export const { setQuery, setActiveTabs, setResults, setLoading, setError } = searchSlice.action

export default searchSlice.reducer;