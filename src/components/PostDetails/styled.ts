import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  color: ${theme.colors.gray};
  font-size: ${theme.font.sizes.small};
  margin: ${theme.spacings.medium} 0;
  font-style: italic;
`;
