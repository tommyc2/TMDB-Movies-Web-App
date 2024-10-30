import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import UpcomingMoviesPage from "./pages/upcomingMovies";
import TrendingMoviesPage from "./pages/trendingMoviesPage";
import RecommendedMoviesPage from "./pages/recommendedMoviesPage"
import SimilarMoviesPage from "./pages/similarMoviesPage";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 360000,
            refetchInterval: 360000,
            refetchOnWindowFocus: false
        },
    },
});

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <SiteHeader />
            <MoviesContextProvider>
            <Routes>
                <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
                <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
                <Route path="/movies/:id" element={<MoviePage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
                <Route path="*" element={ <Navigate to="/" /> } />
                <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
                <Route path="/movies/trending" element={<TrendingMoviesPage />} />
                <Route path="/movies/:id/recommendations" element={<RecommendedMoviesPage />} />
                <Route path="/movies/:id/similar" element={<SimilarMoviesPage />} />
            </Routes>
            </MoviesContextProvider>
        </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);
