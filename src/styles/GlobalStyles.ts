import { createGlobalStyle } from 'styled-components';
import { flexStyles } from './mixins/flexStyles';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-light: #694ED8;
    --primary-dark: #6600CC;
    --dark: #101010;
    --light: #ddd;
    --white: #fff;
    --black: #000;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto Flex', sans-serif;;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
  }

  #root {
    ${flexStyles({ justify: 'space-between', align: 'stretch' })}
    width: 100%;
    min-height: 100vh;
  }

  .auto-padding {
    padding-left: max(calc((100% - 80rem) / 2), 2rem);
    padding-right: max(calc((100% - 80rem) / 2), 2rem);

    @media (max-width: 48rem) {
      padding-left: max(calc((100% - 80rem) / 2), 1rem);
      padding-right: max(calc((100% - 80rem) / 2), 1rem);
    }

    @media (max-width: 30rem) {
      padding-left: max(calc((100% - 80rem) / 2), 0.5rem);
      padding-right: max(calc((100% - 80rem) / 2), 0.5rem);
    }
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  ul, ol {
    list-style: none;
  }
`;
