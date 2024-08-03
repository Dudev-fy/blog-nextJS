import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 3rem;
`;

export const Category = styled.div`
  text-align: center;
  font-size: ${theme.font.sizes.large};
  font-weight: bold;
  padding: ${theme.spacings.medium} 0;
`;
