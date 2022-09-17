import { Card, Image, Text, Grid } from '@nextui-org/react'
import { motion, Variants } from "framer-motion";
import style from './styles.module.css'


interface Props {
    image: string;
    title: string;
    state: boolean
}

const cardVariants: Variants = {
  offscreen: {
    x: 200
  },
  onscreen: {
    x: 0,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 2
    }
  }
};


export const AnimationTecnologie = ({ image, title, state }: Props) => {
  return (
    <Card.Body key={title} css={{ width: '160px', alignContent: 'center',  m: 'auto', d: 'flex', flexWrap: 'wrap'}}>
        <motion.div
        style={{ overflow: 'hidden'}}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true}}
        >
        <div />

        <motion.div variants={cardVariants}>
          {
            state 
            ? <Grid css={{ width: '150px', height: '150px'}} className={ style.titleContent}>
               <Image
                width='150px'
                height='150px'
                src={image}
                alt="Default Image"
                css={{  borderRadius: '4px', backgroudColor: 'white'}}
              /> 
            </Grid>
               
            :<Grid css={{ width: '150px', height: '150px', backgroundColor: 'white'}} >
                <Text css={{ color: 'black', pl: '40px', pt: '60px'} } h5 className={ style.titleContent} > { title } </Text>
            </Grid>
          }
        </motion.div>
        </motion.div>
    </Card.Body>
  );
}
