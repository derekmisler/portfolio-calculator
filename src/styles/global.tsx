import { createGlobalStyle } from 'styled-components'
import { TYPOGRAPHY } from './typography'

interface GlobalStyleProps {
  theme: {
    background: string,
    body: string
  }
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  @font-face {
    font-family: 'neue-haas-grotesk-display';
    src: url('https://use.typekit.net/af/8a200c/00000000000000003b9b204a/27/l?primer=7fa3915bdafdf03041871920a205bef951d72bf64dd4c4460fb992e3ecc3a862&fvd=n6&v=3') format('woff2'), url('https://use.typekit.net/af/8a200c/00000000000000003b9b204a/27/d?primer=7fa3915bdafdf03041871920a205bef951d72bf64dd4c4460fb992e3ecc3a862&fvd=n6&v=3') format('woff'), url('https://use.typekit.net/af/8a200c/00000000000000003b9b204a/27/a?primer=7fa3915bdafdf03041871920a205bef951d72bf64dd4c4460fb992e3ecc3a862&fvd=n6&v=3') format('opentype');
    font-style: normal;
    font-weight: 600;
    font-display: swap;
  }
  @font-face {
    font-family: 'neue-haas-grotesk-text';
    src: url('https://use.typekit.net/af/550c82/00000000000000003b9b2052/27/l?primer=7fa3915bdafdf03041871920a205bef951d72bf64dd4c4460fb992e3ecc3a862&fvd=n5&v=3') format('woff2'), url('https://use.typekit.net/af/550c82/00000000000000003b9b2052/27/d?primer=7fa3915bdafdf03041871920a205bef951d72bf64dd4c4460fb992e3ecc3a862&fvd=n5&v=3') format('woff'), url('https://use.typekit.net/af/550c82/00000000000000003b9b2052/27/a?primer=7fa3915bdafdf03041871920a205bef951d72bf64dd4c4460fb992e3ecc3a862&fvd=n5&v=3') format('opentype');
    font-style: normal;
    font-weight: 500;
    font-display: swap;
  }
  * { box-sizing: border-box; }
  html, body, div, span,
  h1, h2, h3, h4, h5, h6, p, pre,
  a, code, em, img,
  small, strong, ol, ul, li,
  article, aside,
  figure, figcaption, footer, header,
  menu, nav, section {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure,
  footer, header, menu, nav, section {
    display: block;
  }
  html { font-size: 16px; }
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.body};
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
`
