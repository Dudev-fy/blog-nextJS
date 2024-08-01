import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Heading from '@/components/Heading';
import MainContainer from '@/components/MainContainer';
import PostCover from '@/components/PostCover';
import PostDetails from '@/components/PostDetails';
import { PostData } from '@/domain/posts/post';
import { Article } from './styled';

export type PostProps = {
  post: PostData;
};

export default function Post({ post }: PostProps) {
  return (
    <>
      <Header></Header>
      <MainContainer>
        <Heading>{post.attributes.title}</Heading>
        <PostCover
          url={post.attributes.cover.data.attributes.formats.large.url}
          alt={post.attributes.title}
        ></PostCover>
        <PostDetails
          author={post.attributes.author.data.attributes.name}
          category={post.attributes.category.data.attributes.name}
          date={post.attributes.createdAt}
        ></PostDetails>
        <Article>
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
        </Article>
      </MainContainer>
      <Footer></Footer>
    </>
  );
}
