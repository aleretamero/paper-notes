import styled from 'styled-components';
import { flexStyles } from '../../styles/mixins/flexStyles';

export const Container = styled.div`
  ${flexStyles({ gap: 2 })}
  width: 100%;

  & button {
    margin-top: 1rem;
  }
`;
