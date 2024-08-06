import HomePage from '@/containers/HomePage';
import { getAllPosts } from '@/data/posts/get-all-posts';
import { PostData } from '@/domain/posts/post';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Error from 'next/error';
import { PaginationData } from '@/domain/posts/pagination';
import { countAllPosts } from '@/data/posts/count-all-posts';

export type PageProps = {
  posts: PostData[];
  category?: string;
  pagination: PaginationData;
};

export default function Page({ posts, category, pagination }: PageProps) {
  const router = useRouter();

  if (router.isFallback) return <div>Loading...</div>;

  if (!posts.length) {
    return <Error statusCode={404}></Error>;
  }

  return (
    <HomePage
      posts={posts}
      category={category}
      pagination={pagination}
    ></HomePage>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  let page = Number(ctx.params?.param?.[0]);

  if (page <= 0) page = 1;

  const category = ctx.params?.param?.[1] || '';
  const postsPerPage = 6;
  const startFrom = (page - 1) * postsPerPage;

  const nextPage = page + 1;
  const previousPage = page - 1;
  const categoryQuery = category
    ? `&filters[category][name][$eq]=${category}`
    : '';

  const posts = await getAllPosts(
    `sort=id:desc&pagination[start]=${startFrom}&pagination[limit]=${postsPerPage}${categoryQuery}`,
  );

  const numberOfPosts = await countAllPosts(categoryQuery);

  const pagination: PaginationData = {
    numberOfPosts,
    postsPerPage,
    category,
    nextPage,
    previousPage,
  };

  return {
    props: { posts, pagination, category },
    revalidate: 3,
  };
};
