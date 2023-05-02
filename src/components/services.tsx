import {Card, Col, Container, Grid, Image, Text} from "@nextui-org/react";
import { useMediaQuery } from '@/utils/useMediaQuery';

export const Services = () => {
  const isXS = useMediaQuery(600)
  return (
    <div id={"servicios"} style={{
      maxWidth: '100%',
      height: 'calc(100vh - 76px)',
      background: '#ffffff'
    }}>
      <Container>
        <Grid.Container justify={'center'} css={{height: "calc(100vh - 76px)"}}>
          <Grid xs={12} sm={6} alignItems={'center'}>
            <Card css={{p: isXS ? "$3" : "$6"}}>
              <Card.Header css={{flexDirection: "column"}}>
                <Text h4 size={isXS ? 20 : 40}>Nuestros Servicios</Text>
              </Card.Header>
              <Card.Divider />
              <Card.Body css={{textAlign: "center"}}>
                <Text h4 size={isXS ? 20 : 20}>Medicina General</Text>
                <Text h4 size={isXS ? 20 : 20}>Enfermedades Renales</Text>
                <Text h4 size={isXS ? 20 : 20}>Dermatologia</Text>
                <Text h4 size={isXS ? 20 : 20}>Cardioligia</Text>
                <Text h4 size={isXS ? 20 : 20}>Oftalmologia</Text>
                <Text h4 size={isXS ? 20 : 20}>Geriatria</Text>
              </Card.Body>
            </Card>
          </Grid>
          <Grid xs={12} sm={6} alignItems={'center'}>
            <Image src={'gato.png'} width={536} height={465} alt={'Cat Image'} objectFit={"cover"} />
          </Grid>
        </Grid.Container>
      </Container>
    </div>
  );
};