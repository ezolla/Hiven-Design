import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;800&display=swap');

  :root {
    --color-white: #ffffff;
    --color-black: #131313;
    --color-pink: #DC1A78;
    --color-dark: #1C1C1C;
    --color-grey: #2F2F2F;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: var(--color-black);
  }

  a {
    text-decoration: none;
  }
`

export default function App({ Component, pageProps }: any) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
