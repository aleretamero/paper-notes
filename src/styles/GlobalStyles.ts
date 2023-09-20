import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Ubuntu, sans-serif;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
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
