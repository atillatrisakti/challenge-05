import axios from "axios";
import { setBackdropPath, setDetailMovie, setGenre, setPopularMovie, setNowPlayingMovie } from "../reducer/movieReducer";
import { toast } from "react-toastify";

export const getPopularMovie = () => async (dispatch) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=dca3f16902da77f476fae29bef18cfb2`);
    dispatch(setPopularMovie(response.data));
    dispatch(setPopularMovie(response.data.results));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};

export const getDetailMovie = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=dca3f16902da77f476fae29bef18cfb2`);
    dispatch(setDetailMovie(response.data));
    dispatch(setGenre(response.data.genres));
    dispatch(setBackdropPath(`https://image.tmdb.org/t/p/original/${response.data.backdrop_path}`));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};

export const getNowPlayingMovie = () => async (dispatch) => {
  try {
    const response = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=dca3f16902da77f476fae29bef18cfb2");
    dispatch(setNowPlayingMovie(response.data));
    dispatch(setNowPlayingMovie(response.data.results));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};
