import { getAllPosts } from '@/data/posts/get-all-posts';
import { getPost } from '@/data/posts/get-post';
import { PostData } from '@/domain/posts/post';
import { GetStaticPaths, GetStaticProps } from 'next';

export type DynamicPostProps = {
  post: PostData;
};

export default function DynamicPost({ post }: DynamicPostProps) {
  return (
    <>
      <p>{post.attributes.title}</p>
      {post.attributes.content.map((item, index) => {
        if (item.type === 'paragraph') {
          return (
            <p key={index}>
              {item.children.map((child) => {
                if (child.type === 'text') {
                  return child.text;
                }
                return null;
              })}
            </p>
          );
        }
        return null;
      })}
    </>
  );
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
    fallback: false,
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
  };
};
