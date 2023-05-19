import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popularMovie: [],
  nowPlayingMovie: [],
  detailMovie: {},
  genre: [],
  backdropPath: "",
};

const movieSlicer = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setPopularMovie: (state, action) => {
      state.popularMovie = action.payload;
    },
    setNowPlayingMovie: (state, action) => {
      state.nowPlayingMovie = action.payload;
    },
    setDetailMovie: (state, action) => {
      state.detailMovie = action.payload;
    },
    setGenre: (state, action) => {
      state.genre = action.payload;
    },
    setBackdropPath: (state, action) => {
      state.backdropPath = action.payload;
    },
  },
});

export const { setPopularMovie, setBackdropPath, setDetailMovie, setGenre, setNowPlayingMovie } = movieSlicer.actions;

export default movieSlicer.reducer;
