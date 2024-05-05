import { React, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import PopularMovies from "./containers/PopularMovies";
import MovieDetails from "./containers/MovieDetails";
import Layout from "./components/Layout";
import { useDispatch } from "react-redux";
import { getGenres } from "./redux/genres";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<PopularMovies />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </Layout>
  );
}

export default App;
