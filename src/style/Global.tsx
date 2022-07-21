import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
  }
  body {
    background: linear-gradient(to bottom, #2E0558 105px, #54218E 50%, #6720A1 75%, #9F4EC1 100%);

    img {
      height: auto;
      max-width: 100%;
    }
  }
  .font-roboto {
    font-family: 'Roboto', sans-serif;
  }
  .font-pt {
    font-family: 'PT Sans', sans-serif;
  }
  .font-poppins {
    font-family: 'Poppins', sans-serif;
  }
  h1,
  h2,
  h3 {
    font-family: 'PT Sans', sans-serif;
    font-weight: 700;
  }
  button a:hover {
    text-decoration: none;
  }
  .sl-sky-glow {
    box-shadow: 0 0 7px 1px #00ffed;
  }
  .sl-pink-glow {
    box-shadow: 0 0 7px 1px #F86BB7;
  }
`

export default GlobalStyle
