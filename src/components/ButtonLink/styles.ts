import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { flexStyles } from '../../styles/mixins/flexStyles';

export const Button = styled(Link)`
  ${flexStyles()}
  padding: 0 2.5rem;
  height: 3rem;
  border-radius: 0.25rem;
  border: 2px solid var(--dark);
  background-color: var(--white);
  box-shadow: 4px 4px var(--dark);
  color: var(--dark);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;

  &:active,
  .button-confirm:active {
    box-shadow: 0px 0px var(--dark);
    transform: translate(3px, 3px);
  }
`;
