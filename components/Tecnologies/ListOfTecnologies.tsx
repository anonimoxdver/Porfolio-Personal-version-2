import { Card, Container, Image, Text } from '@nextui-org/react'
import React from 'react'
import { SeedData } from '../../Data'

export const ListOfTecnologies = ({ TecnologiesData }: SeedData) => {
  return (
        <Container css={{d: 'flex', flexWrap: 'wrap',borderRadius: '7px', backgroundColor: 'grey'}}>
            {
                TecnologiesData!.map( ({ title, image}) => (
                    <Card.Body key={title} css={{ width: '160px', alignContent: 'center',  m: 'auto', d: 'flex', flexWrap: 'wrap'}}>
                            <Image
                                width='150px'
                                height='150px'
                                src={image}
                                alt="Default Image"

                                css={{  borderRadius: '4px',}}
                            />
                            <Text> {title} </Text>
                            </Card.Body>
                    )) 
            } 
        </Container>
  )
}
