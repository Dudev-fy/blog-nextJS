import { Container } from './styled';

export type PostCoverProps = {
  url: string;
  alt: string;
};

export default function PostCover({ url, alt }: PostCoverProps) {
  return <Container src={url} alt={alt}></Container>;
}
