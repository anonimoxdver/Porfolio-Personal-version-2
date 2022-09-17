import Link from 'next/link'
import { Grid, Text, Image } from '@nextui-org/react'

export const Footer = () => {
  return (
    <Grid.Container  css={{ backgroundColor: '$gray100'}} justify='center'>
        <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
            <Text css={{ ml: 'auto', mr: 'auto'}} >Gracias por estar aqui 🙂</Text>
        </Grid>

        <Grid xs={12} sm={12} md={1} lg={12} xl={12} css={{ mt: 15, mb: 30 }}  >

            <Link href='https://github.com/anonimoxdver' passHref  >
                <Image 
                    src='https://res.cloudinary.com/dsii7wbi4/image/upload/v1662581732/porfolio/GitHub-Mark-Light-120px-plus_adhqyh.png' 
                    alt='github' 
                    width={30} 
                    height={30}
                />
            </Link>
                <Link href='https://www.linkedin.com/in/david-duarte-5968b61ba/' passHref  >
                <Image 
                    src='https://res.cloudinary.com/dsii7wbi4/image/upload/v1663381768/porfolio/174857_egbsyy.png' 
                    alt='linkedin' 
                    width={30} 
                    height={30}
                />   
            </Link>         
        </Grid>
    </Grid.Container>
  )
}
