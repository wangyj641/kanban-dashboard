// lib/http/client.ts
import 'dotenv/config';
import axios, { AxiosError } from 'axios';
import type { ApiError } from './types';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.TMDB_API_KEY;
const LANG = 'en-US';

if (!API_KEY) {
  // Clear warning to avoid "200 but no data" pitfall
  // You can also throw here to exit the script directly
  console.warn('[TMDB] Missing TMDB_API_KEY in .env');
}

export const http = axios.create({
  baseURL: BASE_URL,
  timeout: 10_000,
  headers: { 'Content-Type': 'application/json' },
});

// Always add api_key and language to all request params
http.interceptors.request.use((cfg) => {
  cfg.params = { ...(cfg.params || {}), api_key: API_KEY, language: LANG };
  return cfg;
});

export function toApiError(e: unknown): ApiError {
  if (axios.isAxiosError(e)) {
    const err = e as AxiosError<unknown>;
    const responseData = err.response?.data as Record<string, unknown> | undefined;
    return {
      status: err.response?.status,
      message:
        (responseData?.status_message as string) ||
        (responseData?.message as string) ||
        err.message ||
        'Network/Server error',
      details: err.response?.data,
    };
  }
  return { message: (e as Error)?.message ?? 'Unknown error' };
}
