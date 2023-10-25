import { render, screen } from "@testing-library/react";
import MovieDetails from "./MovieDetails";

jest.mock("react-router-dom", () => ({
  useParams: () => ({
    itemId: "1",
  }),
}));

jest.mock("./useGetMovie", () => ({
  __esModule: true,
  default: jest.fn(() => [false, null, { /* mock movie data */ }]),
}));

test("renders the MovieDetails component", () => {
  render(<MovieDetails mediaType="movie" />);

  const titleElement = screen.getByText("Movie Title"); 
  expect(titleElement).toBeInTheDocument();

  const releaseDateElement = screen.getByText("Release Date"); 
  expect(releaseDateElement).toBeInTheDocument();

});

