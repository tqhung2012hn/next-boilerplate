import { createGlobalStyle } from 'styled-components';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme();

const GlobalStyles = createGlobalStyle`
    html,
    body,
    #__next {
        width: 100%;
        height: 100%;
    }
`;

export { GlobalStyles, theme };
