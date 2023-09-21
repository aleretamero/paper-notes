import styled from 'styled-components';
import { flexStyles } from '../../styles/mixins/flexStyles';

export const Form = styled.form`
  ${flexStyles({ gap: 2, align: 'stretch' })}
  max-width: 48rem;
  width: 100%;
  padding: 1.25rem;
  background: var(--light);
  border-radius: 0.5rem;
  border: 2px solid var(--dark);
  box-shadow: 0.25rem 0.25rem var(--dark);
`;
