import Link from 'next/link';
import { Container } from './styled';
import { SITE_NAME } from '@/config/app-config';

export default function Header() {
  return (
    <Container>
      <Link href={'/'}>
        <h1>{SITE_NAME}</h1>
      </Link>
    </Container>
  );
}
