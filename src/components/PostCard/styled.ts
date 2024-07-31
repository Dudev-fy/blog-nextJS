import styled from 'styled-components';
import { theme } from '@/styles/theme';

export const Container = styled.div`
  transition: opacity 300ms ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

export const PostCardCover = styled.div`
  margin-bottom: ${theme.spacings.small};

  img {
    width: 100%;
    display: block;
  }
`;

export const PostCardHeading = styled.h2`
  font-size: ${theme.font.sizes.medium};
  color: ${theme.colors.darkGray};
`;
