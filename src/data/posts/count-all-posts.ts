import { POST_URL } from '@/config/app-config';
import { fetchMeta } from '@/utils/fetch-meta';
import { PostMeta } from '@/domain/posts/meta';

export const countAllPosts = async (query = ''): Promise<number> => {
  const url = `${POST_URL}?fields[0]=id&${query}`;
  const numberOfPosts = await fetchMeta<PostMeta>(url);
  return numberOfPosts.pagination.total;
};
