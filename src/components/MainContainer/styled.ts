import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const Container = styled.main`
  max-width: 96rem;
  font-size: ${theme.font.sizes.medium};
  margin: 0 auto;
  padding: ${theme.spacings.medium};
`;
