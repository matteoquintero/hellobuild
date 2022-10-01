import '../styles/globals.scss'
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { createContext } from 'vm';
import { Favorite } from '../types/types';
import { useContext } from 'react';
import { FavoriteProvider } from '../context/FavoriteContext';


function MyApp({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) {
  
  return (
    <FavoriteProvider>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </FavoriteProvider>

  );
}

export default MyApp;