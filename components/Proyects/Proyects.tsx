import { Card, Grid, Text } from "@nextui-org/react";
import { data } from "../../Data";
import { ListOfProyecs } from "./ListOfProyecs";


export const Proyects = () =>  {
  return (
    <Grid.Container gap={0} xs={12} sm={12} md={12} lg={12} xl={12}>
        <Card.Header> <Text h1 css={{ ml: '1%'}}>Proyectos </Text> </Card.Header>
        <ListOfProyecs ProyectsData={ data.ProyectsData }/>
    </Grid.Container>
  );
}