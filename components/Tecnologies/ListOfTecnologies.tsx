import { Container } from '@nextui-org/react'
import { SeedTecnologies } from '../../Data'
import { AnimationTecnologie } from './AnimationTecnologie'

interface Props {
    TecnologiesData: SeedTecnologies[];
    state: boolean;
}


export const ListOfTecnologies = ({ TecnologiesData, state }: Props) => {



  return (
        <Container css={{d: 'flex', flexWrap: 'wrap',borderRadius: '7px', backgroundColor: 'grey'}}>
 
            {
                TecnologiesData!.map( ({ title, image }) => (
                    <AnimationTecnologie image={ image } title={ title } key={ title } state={ state } />
                    )) 
            } 
        </Container>
  )
}



