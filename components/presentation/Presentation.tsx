import { Grid, Text, Image } from '@nextui-org/react';
import styles from './styles.module.css'

export const Presentation = () => {
  return (
    <Grid.Container >
      <Grid  xs={12} sm={6} md={6} lg={6} xl={6} >
        <div >
          <Text 
            h1
            size={55}
            css={{
              textGradient: "45deg, $yellow600 -20%, $red600 100%",
              maxWidth: '400px',
              ml: '10%',
              mb: '4%',
              maxHeight: '230px'
            }}
            weight="bold"> 
            David Duarte Allende
          </Text>

          <Text size={17} css={{maxWidth: '550px', overflow: 'hidden', ml: '10%', mb: '4%', maxHeight: '140px'}} className={ styles.titleContent}>
            <span className={ styles.titleContent}>Desarrollador web usando frontEnd y backEnd con Next.js. </span>
            <span className={ styles.titleSecont}>Aplicando el uso del CEO en aplicaciones y optimización del producto,  </span>
            <span className={ styles.titleThird}>buenas prácticas en código, responsabilidad y trabajo en equipo. </span>
            <span className={ styles.titleFourth}>Interesado en aprender cada día más sobre el desarrollo web.</span>   
          </Text> 
        </div> 
      </Grid>    
      <Grid  xs={12} sm={6} md={6} lg={6} xl={6} >
        <Image src='https://res.cloudinary.com/dsii7wbi4/image/upload/v1662497947/porfolio/Dise%C3%B1o_sin_t%C3%ADtulo_ef2q8z.png'alt='image colash'  objectFit='cover' />
      </Grid>     
    </Grid.Container>
  )
}



