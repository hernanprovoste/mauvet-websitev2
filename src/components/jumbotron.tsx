import {Col, Container, Grid, Image, Text} from "@nextui-org/react";
import { useMediaQuery } from '@/utils/useMediaQuery';

export const Jumbotron = () => {
  const isXS = useMediaQuery(600)
  return (
    <div id={"home"} style={{
      maxWidth: '100%',
      height: 'calc(100vh - 76px)',
      background: '#ffffff'
    }}>
      <Container>
        <Grid.Container justify={'center'} css={{height: "calc(100vh - 76px)"}}>
          <Grid xs={12} sm={6} alignItems={'center'}>
              <Text weight={'bold'} size={isXS ? 30 : 60} css={{'@xs': {textAlign: 'center'}, '@sm': {textAlign: 'start'}}}>Porque tu gato es un miembro más de tu familia.</Text>
          </Grid>
          <Grid xs={12} sm={6} alignItems={'center'}>
            <Image src={'gato.png'} width={536} height={465} alt={'Cat Image'} objectFit={"cover"} />
          </Grid>
        </Grid.Container>
      </Container>
    </div>
  );
};