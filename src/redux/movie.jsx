import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    recommendation :{
        results : [],
        hasMore : false,
        totalResults : 0,
        page : 0,
        totalPages: 0,
        isFetching: false
    }
}

const movieSlice = createSlice({
    name : 'movieSlice',
    initialState,
    reducers:{
        getMovie: (state) => {
            return{
                ...state,
                isFetching: true
            }
        },
        fetchedMovie: (state,action) => {
            return{
                ...state,
                ...action.payload,
                recommendation:{
                    ...action.payload.recommendation,
                    results : action.payload.recommendation.results.slice(0,10)
                },
                isFetching: false
            }
        },
        resetState : (state) => {
            return initialState;
        }
    }

})

export const {getMovie,fetchedMovie,resetState} =  movieSlice.actions;

export default movieSlice.reducer