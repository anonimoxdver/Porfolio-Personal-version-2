import { Card, Grid, Text, Switch } from '@nextui-org/react'
import { FC, useState } from 'react'
import { data } from '../../Data'
import { ListOfTecnologies } from './ListOfTecnologies'
import style from './styles.module.css'


export const Tecnologies:FC = () => {

  const [state, setState] = useState(true)

  return (
    <Grid>
        <Grid className={ style.tecnoTriangulo }></Grid>
            <Grid.Container  xs={12} sm={12} md={12} lg={12} xl={12}  css={{  m: 'auto', backgroundColor: '$yellow600', pb: 30}}> 
                <Grid xs={9} sm={6} md={7} lg={6} xl={6} css={{m: 'auto'}} direction='column'>
                  <Grid.Container>
                        <Grid xs={11} sm={11} md={11} lg={11} xl={11}  direction='row'>
                    <Card.Header > <Text h2 css={{ color: '$blue400' }}>Tecnologias</Text> </Card.Header> 
                    <Switch checked={state} onChange={ () => setState( !state )} css={{ mt: 35}} /> 
                  </Grid>
                  </Grid.Container>
              
                    
                    <ListOfTecnologies TecnologiesData={ data.TecnologiesData!  } state={ state } />    
                </Grid>
            </Grid.Container>     
        <Grid className={ style.tecnoTrianguloRigth }></Grid>   
    </Grid>

  )
}
