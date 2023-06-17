import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html,
    body,
    textarea {
        padding: 0;
        margin: 0;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    * {
        box-sizing: border-box;
    }

    a {
        cursor: pointer;
        text-decoration: none;
        transition: .25;
        color: #000;
    }

    ol, ul {
        list-style: none;
    }
`;

export default GlobalStyle;
