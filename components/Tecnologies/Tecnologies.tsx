import { Card, Grid, Text } from '@nextui-org/react'
import { FC } from 'react'
import { data } from '../../Data'
import { ListOfTecnologies } from './ListOfTecnologies'
import style from './styles.module.css'


export const Tecnologies:FC = () => {
  return (
    <Grid>
        <Grid className={ style.tecnoTriangulo }></Grid>
            <Grid.Container  xs={12} sm={12} md={12} lg={12} xl={12}  css={{  m: 'auto', backgroundColor: '$yellow600', pb: 30}}> 
                <Grid xs={9} sm={6} md={7} lg={6} xl={6} css={{m: 'auto'}}>
                    <Card.Header > <Text h2 css={{ color: '$blue400' }}>Tecnologias</Text> </Card.Header> 
                    <ListOfTecnologies TecnologiesData={ data.TecnologiesData }/>    
                </Grid>
            </Grid.Container>     
        <Grid className={ style.tecnoTrianguloRigth }></Grid>   
    </Grid>

  )
}
