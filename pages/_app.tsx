import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import {lightTheme,darkTheme,GlobalStyles } from '../utils/ThemeConfig'
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import NextNProgress from 'nextjs-progressbar';


function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<'dark'|'light'>('light') 

  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }
  return(

    <ThemeProvider theme={theme == 'light' ? lightTheme: darkTheme}>
      <ToastContainer/>


      <GlobalStyles/>
      <NextNProgress />
      {/* <button onClick={toggleTheme}>Switch Theme</button> */}
      <Component {...pageProps} />

    </ThemeProvider> 
  )
}

export default MyApp
