
import NextLink from "next/link";
import { Card, Grid, Link, Text, Row, Image } from "@nextui-org/react";
import { SeedData } from "../../Data";


export const ListOfProyecs= ({ ProyectsData }: SeedData) => {
  return (
    <Grid.Container>
      { ProyectsData!.map(({ title, image, link, github, background }) => (
          <Grid 
            key={title} 
            xs={12} sm={5} md={4} lg={4} xl={3} 
            justify="center" 
            css={{  pt: 10, 
                    pb: 10, 
                    backgroundColor: background ? '$green200' : ''
            }}>
            <Card css={{ mw: "330px"}}>
              <Card.Header>
                <Text b> {title} </Text>
              </Card.Header>
              <Card.Divider />
              <Card.Body css={{ py: "$2" }}>
                <Image src={image} alt="Default Image"   objectFit="cover" />
              </Card.Body>
              <Card.Divider />
              <Card.Footer>
                <Row justify="flex-end">
                  <NextLink href={github} passHref>
                    <Link 
                      block 
                      color="default" 
                      css={{mr: 15}} 
                    >
                      Github
                    </Link>
                  </NextLink>
                  <NextLink href={link} passHref>
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
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
  );
};
