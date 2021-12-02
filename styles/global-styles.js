import { createGlobalStyle } from 'styled-components'
import theme from './theme'

const GlobalStyles = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: ${theme.fonts.lato};
    background-color: ${props => props.theme.colors.white};
    font-size: 7px;
  }

  .model-open {
    height: 100vh;
    overflow: hidden;
  }
`

export default GlobalStyles