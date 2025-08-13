// lib/http/types.ts
import { ZodSchema, z } from 'zod';

export interface ApiError {
  status?: number;
  message: string;
  details?: unknown;
}
export type ApiResult<T> = { ok: true; data: T } | { ok: false; error: ApiError };

// Utility: Wrap Zod schema, always return ApiResult
export const makeSafeParse =
  <T>(schema: ZodSchema<T>) =>
  (input: unknown): ApiResult<T> => {
    const parsed = schema.safeParse(input);
    if (!parsed.success) {
      return {
        ok: false,
        error: { message: 'Schema validation failed', details: parsed.error.flatten() },
      };
    }
    return { ok: true, data: parsed.data };
  };

// ---------------- TMDB v3: Movie Model ----------------
export const MovieSchema = z.object({
  id: z.number(),
  title: z.string(),
  overview: z.string(),
  poster_path: z.string().nullable().optional(),
  backdrop_path: z.string().nullable().optional(),
  release_date: z.string().nullable().optional(),
  vote_average: z.number(),
  vote_count: z.number(),
  popularity: z.number().optional(),
});

export type Movie = z.infer<typeof MovieSchema>;

// List response: /movie/popular
export const MovieListResponseSchema = z.object({
  page: z.number(),
  results: z.array(MovieSchema),
  total_pages: z.number(),
  total_results: z.number(),
});
export type MovieListResponse = z.infer<typeof MovieListResponseSchema>;

// ---------------- Posts API Model ----------------
export const PostSchema = z.object({
  id: z.number(),
  title: z.string(),
  body: z.string(),
  userId: z.number(),
});

export type Post = z.infer<typeof PostSchema>;

export const PostCreateSchema = z.object({
  title: z.string(),
  body: z.string(),
  userId: z.number(),
});

export type PostCreate = z.infer<typeof PostCreateSchema>;
