import styled from 'styled-components';
import { flexStyles } from '../../styles/mixins/flexStyles';

export const Container = styled.div`
  ${flexStyles({ direction: 'row', justify: 'space-between', wrap: 'no-wrap' })}
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  ${flexStyles({ gap: 2, align: 'flex-start' })}
  width: 50%;
  height: 100%;
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
`;
