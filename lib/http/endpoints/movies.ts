// lib/http/endpoints/movies.ts
import { http, toApiError } from "../client";
import {
  ApiResult,
  Movie,
  MovieListResponse,
  MovieListResponseSchema,
  MovieSchema,
  makeSafeParse,
} from "../types";

const parseMovie = makeSafeParse(MovieSchema);
const parseMovieList = makeSafeParse(MovieListResponseSchema);

export async function listPopularMovies(page = 1): Promise<ApiResult<MovieListResponse>> {
  try {
    const { data } = await http.get("/movie/popular", { params: { page } });
    return parseMovieList(data);
  } catch (e) {
    return { ok: false, error: toApiError(e) };
  }
}

export async function getMovieDetail(id: number): Promise<ApiResult<Movie>> {
  try {
    const { data } = await http.get(`/movie/${id}`);
    return parseMovie(data);
  } catch (e) {
    return { ok: false, error: toApiError(e) };
  }
}
