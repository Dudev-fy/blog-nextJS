import { PostData } from '@/domain/posts/post';
import { POST_URL } from '@/config/app-config';
import { fetchJson } from '@/utils/fetch-json';

export const getPost = async (
  slug: string | string[] | undefined,
): Promise<PostData[] | null> => {
  if (slug) {
    const slugString = Array.isArray(slug) ? slug[0] : slug;
    const url = `${POST_URL}?filters[slug][$eq]=${slugString}`;
    const posts = await fetchJson<PostData[]>(`${url}&populate=*`);
    return posts;
  } else {
    return null;
  }
};
