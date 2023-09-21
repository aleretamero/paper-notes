import { css } from 'styled-components';

interface IFlexProps {
  direction?: 'column' | 'row';
  wrap?: 'wrap' | 'no-wrap';
  justify?: 'center' | 'flex-start' | 'flex-end' | 'space-between';
  align?: 'center' | 'flex-start' | 'flex-end' | 'stretch';
  gap?: number;
}

export const flexStyles = (props?: IFlexProps) => css`
  display: flex;
  flex-direction: ${props?.direction ?? 'column'};
  flex-wrap: ${props?.wrap ?? 'wrap'};
  justify-content: ${props?.justify ?? 'center'};
  align-items: ${props?.align ?? 'center'};
  gap: ${props?.gap ?? 0}rem;
`;
