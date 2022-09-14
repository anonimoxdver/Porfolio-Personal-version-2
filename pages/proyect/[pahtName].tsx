import { Grid, Image, Text, Link, Row } from '@nextui-org/react';
import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import React from 'react'
import NextLink from 'next/link'

import { SeedProyecs } from '../../Data';;
import { getAllProyectsPath, getProyectByPath } from '../../database';
import { Layout } from '../../layout';

interface Props {
  proyectData: SeedProyecs[]
}

const HomeProyect: NextPage<Props> = ({ proyectData }) => {

    console.log({proyectData})


  return (
    <>
      {
        proyectData.map( proyectData  => (
          <Layout key={ proyectData.title } description={ proyectData.description } title={ proyectData.title }>
            <Grid.Container justify='center' >
              <Grid xs={12} sm={6} md={6} lg={6} xl={6} direction='column'>
                  <Text css={{ml: '4%', mb: 10}} h1> { proyectData.title  } </Text>
                  <Image alt='image of proyect' src={ proyectData.firstImage }  width={ 450 } height={ 300 } />
                  <Image alt='image of proyect' src={ proyectData.secondImage } width={ 450 } height={ 300 } />
                </Grid>
                <Grid xs={12} sm={6} md={6} lg={6} xl={6} direction='column' css={{ p: 30 }}>
                  <Text  h3> Descripcion </Text>
                  <Text css={{ mw: '450px', pb: 20 }} > { proyectData.description } </Text>
                  <Grid direction='row'>
                    <Row justify="flex-end">
                      <NextLink href={proyectData.github} passHref>
                        <Link 
                          block 
                          color="default" 
                          css={{mr: 15}} 
                        >
                          Github
                        </Link>
                      </NextLink>
                      <NextLink href={proyectData.link} passHref>
                        <Link
                          block
                          color="text"
                          css={{
                            backgroundColor: "$primary",
                            width: "90px",
                            justifyContent: "center",
                          }}
                        >
                          Ir al sitio
                        </Link>
                      </NextLink>
                    </Row>
                  </Grid>
                </Grid>
            </Grid.Container>
                
          </Layout>
        ))
        
      }
    </>
    
  )
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const proyectsPaths = await getAllProyectsPath();

  return {
    paths: proyectsPaths.map( ({ pahtName }) => ({
      params: {
        pahtName
      }
    })),
    fallback: false
  }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
  
  const { pahtName = '' } = params as { pahtName: string };
  const proyectData = await getProyectByPath( pahtName );
  
  if ( !proyectData ) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      proyectData
    },
  
  }
  }
export default HomeProyect;