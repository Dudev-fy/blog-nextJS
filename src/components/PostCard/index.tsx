import { Container, PostCardCover, PostCardHeading } from './styled';
import Link from 'next/link';

export type PostCardProps = {
  slug: string;
  title: string;
  cover: string;
};

export default function PostCard({ slug, title, cover }: PostCardProps) {
  return (
    <Container>
      <PostCardCover>
        <Link href={'/post/[slug]'} as={`post/${slug}`}>
          <img src={cover} alt={title}></img>
        </Link>
      </PostCardCover>
      <PostCardHeading>
        <Link href={'/post/[slug]'} as={`post/${slug}`}>
          <h2>{title}</h2>
        </Link>
      </PostCardHeading>
    </Container>
  );
}
