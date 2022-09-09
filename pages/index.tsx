import type { NextPage } from 'next'
import Head from 'next/head';
import { Grid, Spacer } from '@nextui-org/react';
import { Contact, Tecnologies } from '../components';
import { Proyects } from '../components'
import { Presentation } from '../components/presentation';
import { Footer } from '../components/Footer';



const Home: NextPage = () => {
  return (
    <>

      <Head>
      <title>Porfolio De David</title>
        <meta name="description" content='Porfolio personal de David Duarte Allende' />            
        <meta name="og:title" content=' Porfolio DA ' />
        <meta name="og:description" content='Porfolio personal de David Duarte Allende' />
      </Head>

      <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
        <Spacer y={3}/>
        <Presentation/>
        <Spacer y={8}/>
        <Tecnologies/>
        <Spacer y={8}/>
        <Proyects/>
        <Spacer y={8}/>
        <Contact/>
        <Spacer y={8}/>
        <Footer/>
      </Grid>

    </> 
  )
}

export default Home
