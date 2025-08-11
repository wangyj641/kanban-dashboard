// scripts/task3-tmdb-fetch.ts
import "dotenv/config";
import { listPopularMovies, getMovieDetail } from "../lib/http/endpoints/movies";

(async () => {
  const list = await listPopularMovies(1);
  if (!list.ok) {
    console.error("❌ listPopularMovies error:", list.error);
    process.exit(1);
  }
  console.log("✅ Popular movies (first 5):");
  console.log(
    list.data.results.slice(0, 5).map(m => ({
      id: m.id,
      title: m.title,
      vote: m.vote_average,
      date: m.release_date,
      poster: m.poster_path,
    }))
  );

  const firstId = list.data.results[0]?.id;
  if (firstId) {
    const one = await getMovieDetail(firstId);
    if (!one.ok) {
      console.error("❌ getMovieDetail error:", one.error);
      process.exit(1);
    }
    console.log("✅ Detail of first movie:", {
      id: one.data.id,
      title: one.data.title,
      vote: one.data.vote_average,
      overviewLen: one.data.overview?.length,
    });
  }
})();
