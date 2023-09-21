import styled from 'styled-components';
import { flexStyles } from '../../styles/mixins/flexStyles';

export interface IContainerProps {
  bg?: string;
}

export const Container = styled.section<IContainerProps>`
  ${flexStyles({ gap: 5 })}
  flex:1;
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: ${(props) =>
    props.bg ? props.bg : props.theme.colors.background};
`;
