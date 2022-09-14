import NextLink from "next/link";
import { Card, Grid, Link, Text, Row, Image, Loading } from "@nextui-org/react";

import useSWR, { Key, Fetcher } from "swr";
import { SeedProyecs } from "../../Data";

interface Props {
  resp: SeedProyecs[]
}

export const ListOfProyecs= () => {

  const fetcher: Fetcher<Props, string> = (...args) => fetch(...args).then(res => res.json())

  const { data, error } = useSWR("/api/data/getData", fetcher)

  if (error) return <div>failed to load</div>

  if ( !data ) { 
    return (     
          <Grid css={{ ml: '45%'}} xs={12} sm={12} md={12} lg={12} xl={12}>
            <Loading loadingCss={{ $$loadingSize: "100px", $$loadingBorder: "10px" }} />
          </Grid>          
      )
    }

 return (
    <Grid.Container>
      { data!.resp.map((proyect: SeedProyecs ) => (
          <Grid 
            key={proyect.title} 
            xs={12} sm={5} md={4} lg={4} xl={3} 
            justify="center" 
            css={{  pt: 10, 
                    pb: 10, 
                    backgroundColor: proyect.background ? '$green200' : ''
            }}>
            <Card css={{ mw: "330px"}}>
              <Card.Header>
                <Text b> {proyect.title} </Text>
              </Card.Header>
              <Card.Divider />
              <Card.Body css={{ py: "$2" }}>
                <Image src={proyect.firstImage} alt="Default Image"   objectFit="cover" />
              </Card.Body>
              <Card.Divider />
              <Card.Footer>
                <Row justify="flex-end">
                  <NextLink href={`/proyect/${proyect.pahtName}`} passHref>
                    <Link
                      block
                      color="text"
                      css={{
                        backgroundColor: "$primary",
                        width: "90px",
                        justifyContent: "center",
                      }}
                    >
                      Ver mas
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
