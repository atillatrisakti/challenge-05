import React, { useEffect } from "react";
import { Carousel, Button } from "react-bootstrap";
import PopularMovie from "../components/PopularMovie";
import "../styles/App.css";
import { useDispatch, useSelector } from "react-redux";
import { getNowPlayingMovie } from "../redux/actions/movieAction";

function Home() {
  const dispatch = useDispatch();
  const { nowPlayingMovie } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(getNowPlayingMovie());
  }, [dispatch]);

  return (
    <>
      <div className="bg">
        <Carousel controls={false}>
          {nowPlayingMovie &&
            nowPlayingMovie.length > 0 &&
            nowPlayingMovie.slice(4, 7).map((movie) => (
              <Carousel.Item key={movie.id} style={{ maxHeight: "700px" }}>
                <img className="d-block w-100" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                <Carousel.Caption
                  className="text-start"
                  style={{
                    left: "30%",
                    transform: "translateX(-50%)",
                    bottom: "20%",
                  }}
                >
                  <h1 className="display-4" style={{ fontWeight: "bold" }}>
                    {movie.title}
                  </h1>
                  <p>{movie.overview}</p>
                  <Button variant="danger" className="ms-2" style={{ borderRadius: "20px", width: "200px" }}>
                    <i class="fas fa-clock" /> Watch Trailer
                  </Button>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
        </Carousel>
        <PopularMovie />
      </div>
    </>
  );
}

export default Home;
