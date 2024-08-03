import Header from '@/components/Header';
import { Container, Category } from './styles';
import { PostData } from '@/domain/posts/post';
import MainContainer from '@/components/MainContainer';
import PostCard from '@/components/PostCard';
import Footer from '@/components/Footer';

export type HomePageProps = {
  posts: PostData[];
  category?: string;
};

export default function HomePage({ posts, category }: HomePageProps) {
  return (
    <>
      <Header />
      {category && <Category>Category: {category}</Category>}
      <MainContainer>
        <Container>
          {posts.map((post) => (
            <>
              <PostCard
                cover={post.attributes.cover.data.attributes.formats.small.url}
                slug={post.attributes.slug}
                title={post.attributes.title}
              />
            </>
          ))}
        </Container>
        <Footer />
      </MainContainer>
    </>
  );
}
