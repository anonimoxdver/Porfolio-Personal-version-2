import React, { FC }  from 'react';
import Head from 'next/head';
import { Grid } from '@nextui-org/react';


interface Props {
  title: string;
  children: React.ReactNode;
  description: string;
}


export const Layout: FC<Props> = ({ children, title, description }) => {

  return (
      <>
        <Head>
            <title>{ title }</title>
            <meta name="author" content="David Duarte Allende" />
            <meta name="description" content={`${ description }`} />
            <meta name="keywords" content={ `${ title }, porfolio, David Duarte Allende`} />

            <meta property="og:title" content={`${ title }`} />
            <meta property="og:description" content={`${ description }`} />

        </Head>


        <main>
      
            { children }
           
        </main>
      
      </>
  )
};