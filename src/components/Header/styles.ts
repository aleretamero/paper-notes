import styled from 'styled-components';
import { flexStyles } from '../../styles/mixins/flexStyles';

export const Container = styled.header`
  ${flexStyles({ direction: 'row', justify: 'space-between' })};
  width: 100%;
  height: 80px;
  background-color: var(--white);
`;

export const Navbar = styled.nav`
  ${flexStyles({ direction: 'row', gap: 1 })}
`;
