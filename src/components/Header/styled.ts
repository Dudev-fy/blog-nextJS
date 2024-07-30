import styled from 'styled-components';
import { theme } from '@/styles/theme';

export const Container = styled.header`
  background-color: ${theme.colors.primary};
  font-size: ${theme.font.sizes.large};
  padding: ${theme.spacings.medium};
  text-align: center;

  a {
    color: ${theme.colors.white};
  }
`;
