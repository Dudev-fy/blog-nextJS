import Post from '@/containers/Post';
import { getAllPosts } from '@/data/posts/get-all-posts';
import { getPost } from '@/data/posts/get-post';
import { PostData } from '@/domain/posts/post';
import { GetStaticPaths, GetStaticProps } from 'next';
import Error from 'next/error';
import { useRouter } from 'next/router';

export type DynamicPostProps = {
  post: PostData;
};

export default function DynamicPost({ post }: DynamicPostProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Page loading...</div>;
  }

  if (!post) {
    return <Error statusCode={404}></Error>;
  }

  return <Post post={post}></Post>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.attributes.slug,
        },
      };
    }),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  if (ctx.params && ctx.params.slug) {
    const posts = await getPost(ctx.params.slug);

    if (posts) {
      return {
        props: { post: posts[0] },
      };
    }
  }

  return {
    props: { posts: [] },
    revalidate: 5,
  };
};
