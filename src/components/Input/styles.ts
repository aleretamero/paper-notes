import styled from 'styled-components';
import { flexStyles } from '../../styles/mixins/flexStyles';

export const Wrap = styled.div`
  ${flexStyles({ align: 'flex-start', gap: 0.5 })}
  width: 100%;
  position: relative;
`;

export const Label = styled.label``;

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  border-radius: 0.25rem;
  border: 2px solid var(--dark);
  background-color: var(--white);
  box-shadow: 4px 4px var(--dark);
  font-size: 1rem;
  font-weight: 700;
  color: var(--dark);
  padding: 0.25rem 0.5rem;
  outline: none;

  &::placeholder {
    color: var(--dark);
    opacity: 0.8;
  }

  &:focus {
    border: 2px solid var(--primary-light);
  }
`;

export const Error = styled.p`
  position: absolute;
  left: 0;
  bottom: -1.5rem;
`;
