import {Col, Container, Grid, Text} from "@nextui-org/react";

export const Jumbotron = () => {
  return (
    <div style={{
      maxWidth: '100%',
      height: 'calc(100vh - 76px)',
      background: '#ffffff'
    }}>
      <Grid.Container justify={'center'} gap={2} css={{height: "calc(100vh - 76px)"}}>
        <Grid xs={12} sm={6} alignItems={'center'}>
            <Text weight={'bold'} size={70} css={{textAlign: 'center'}}>Nuestra Nueva Veterinaria</Text>
        </Grid>
        <Grid xs={12} sm={6} alignItems={'center'}>
          <Text weight={'bold'} size={70} css={{textAlign: 'center'}}>Nuestra Nueva Veterinaria</Text>
        </Grid>
      </Grid.Container>
    </div>
  );
};