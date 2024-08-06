import { PaginationData } from '@/domain/posts/pagination';
import { Container, NextLink, PreviousLink } from './styled';
import Link from 'next/link';

export type PaginationProps = PaginationData;

export default function Pagination({
  nextPage,
  numberOfPosts,
  category,
  postsPerPage,
  previousPage,
}: PaginationProps) {
  const categoryName = category || '';
  const nextLink = `/post/page/${nextPage}/${categoryName}`;
  const previousLink = `/post/page/${previousPage}/${categoryName}`;
  const hasNextPage = nextPage * postsPerPage < postsPerPage + numberOfPosts;
  const hasPreviousPage = previousPage >= 1;
  return (
    <Container>
      {hasPreviousPage && (
        <PreviousLink>
          <Link href={previousLink}>Previous Page</Link>
        </PreviousLink>
      )}
      {hasNextPage && (
        <NextLink>
          <Link href={nextLink}>Next Page</Link>
        </NextLink>
      )}
    </Container>
  );
}
