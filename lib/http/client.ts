// lib/http/client.ts
import 'dotenv/config';
import axios, { AxiosError } from "axios";
import type { ApiError } from "./types";

const BASE_URL = process.env.TMDB_API_BASE ?? "https://api.themoviedb.org/3";
const API_KEY = process.env.TMDB_API_KEY;
const LANG = process.env.TMDB_LANG ?? "en-US";

if (!API_KEY) {
  // 给出清晰提示，避免“200 但无数据”的暗坑
  // 你也可以在这里 throw 让脚本直接退出
  console.warn("[TMDB] Missing TMDB_API_KEY in .env");
}

export const http = axios.create({
  baseURL: BASE_URL,
  timeout: 10_000,
  headers: { "Content-Type": "application/json" },
});

// 统一把 api_key 与 language 加到所有请求 params
http.interceptors.request.use(cfg => {
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
        "Network/Server error",
      details: err.response?.data,
    };
  }
  return { message: (e as Error)?.message ?? "Unknown error" };
}
