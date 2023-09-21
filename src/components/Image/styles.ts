import styled from 'styled-components';
import { flexStyles } from '../../styles/mixins/flexStyles.ts';

export interface IContainerProps {
  width?: number;
  maxwidth?: number;
  aspectRatio?: 'square' | 'screen';
}

export const Container = styled.div<IContainerProps>`
  ${flexStyles()};
  width: ${(props) => props?.width + 'rem' ?? 'initial'};
  max-width: ${(props) => props?.maxwidth + 'rem' ?? 'initial'};
  aspect-ratio: ${(props) => props?.aspectRatio ?? 'initial'};
`;

export const Image = styled.img`
  display: block;
  width: 100%;
`;
