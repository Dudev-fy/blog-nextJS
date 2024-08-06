import Header from '@/components/Header';
import { Container, Category, AllPostsLink } from './styles';
import { PostData } from '@/domain/posts/post';
import MainContainer from '@/components/MainContainer';
import PostCard from '@/components/PostCard';
import Footer from '@/components/Footer';
import { PaginationData } from '@/domain/posts/pagination';
import Pagination from '@/components/Pagination';
import Link from 'next/link';

export type HomePageProps = {
  posts: PostData[];
  category?: string;
  pagination?: PaginationData;
};

export default function HomePage({
  posts,
  category,
  pagination,
}: HomePageProps) {
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
        <Pagination {...pagination}></Pagination>
        {!pagination?.nextPage && (
          <Link href={'/post/page/1'}>
            <AllPostsLink>See all posts</AllPostsLink>
          </Link>
        )}
        <Footer />
      </MainContainer>
    </>
  );
}
