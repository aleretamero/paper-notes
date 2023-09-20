import { ITheme } from './ITheme';

declare module 'styled-components' {
  export interface Theme extends ITheme {}
}
