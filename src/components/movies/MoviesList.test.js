import React from "react";
import { render, screen } from "@testing-library/react";
import MoviesList from "./MoviesList";

const mockMoviesList = [
  {
    id: 1,
    poster_path: "/poster1.jpg",
    vote_average: 7.5,
    title: "Movie 1",
    media_type: "movie",
  },
];

test("renders the MoviesList component", () => {
  render(<MoviesList moviesList={mockMoviesList} />);

  const titleElement = screen.getByText("Latest Movies & TV Shows");
  expect(titleElement).toBeInTheDocument();

  const movieCards = screen.getAllByTestId("movie-card");
  expect(movieCards.length).toBe(mockMoviesList.length);

});
