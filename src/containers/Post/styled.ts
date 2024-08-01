import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const Article = styled.article`
  color: ${theme.colors.darkGray};
  padding: 0;
  padding: ${theme.spacings.small} 0;
  line-height: 1.5;

  p {
    margin: ${theme.spacings.medium} 0;
  }
`;
