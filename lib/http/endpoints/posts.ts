// lib/http/endpoints/posts.ts
import { http, toApiError } from '../client';
import { ApiResult, Post, PostSchema, PostCreate, PostCreateSchema, makeSafeParse } from '../types';

const parsePost = makeSafeParse(PostSchema);
const parsePosts = (input: unknown) => {
  if (!Array.isArray(input))
    return { ok: false, error: { message: 'Expected array' } } as ApiResult<Post[]>;
  const out: Post[] = [];
  for (const item of input) {
    const r = parsePost(item);
    if (!r.ok) return r as ApiResult<Post[]>;
    out.push(r.data);
  }
  return { ok: true, data: out } as ApiResult<Post[]>;
};

export async function listPosts(): Promise<ApiResult<Post[]>> {
  try {
    const { data } = await http.get('/posts');
    return parsePosts(data);
  } catch (e) {
    return { ok: false, error: toApiError(e) };
  }
}

export async function getPost(id: number): Promise<ApiResult<Post>> {
  try {
    const { data } = await http.get(`/posts/${id}`);
    return parsePost(data);
  } catch (e) {
    return { ok: false, error: toApiError(e) };
  }
}

export async function createPost(input: PostCreate): Promise<ApiResult<Post>> {
  // validate input
  const valid = PostCreateSchema.safeParse(input);
  if (!valid.success) {
    return { ok: false, error: { message: 'Invalid input', details: valid.error.flatten() } };
  }

  try {
    const { data } = await http.post('/posts', valid.data);
    return parsePost(data);
  } catch (e) {
    return { ok: false, error: toApiError(e) };
  }
}
