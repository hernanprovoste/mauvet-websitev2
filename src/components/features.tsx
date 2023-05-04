import {
    createStyles,
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem,
  } from '@mantine/core';
  import { IconClipboardHeart, IconVaccine, IconHeart } from '@tabler/icons-react';
  
  const mockdata = [
    {
      title: 'Medicina General',
      description:
        'Nuestra medicina general está diseñada para mantener a tus amigos felinos en su mejor estado de salud.',
      icon: IconClipboardHeart,
    },
    {
      title: 'Enfermedades Renales',
      description:
        'Ofrecemos tratamientos especializados para enfermedades renales en gatos, ayudando a mantener a tus amigos felinos saludables',
      icon: IconVaccine,
    },
    {
      title: 'Cardiologia',
      description:
        'Nuestros servicios de cardiología para gatos están diseñados para prevenir y tratar enfermedades cardíacas en tus amigos felinos.',
      icon: IconHeart,
    },
  ];
  
  const useStyles = createStyles((theme) => ({
    title: {
      fontSize: rem(34),
      fontWeight: 900,
  
      [theme.fn.smallerThan('sm')]: {
        fontSize: rem(24),
      },
    },
  
    description: {
      maxWidth: 600,
      margin: 'auto',
  
      '&::after': {
        content: '""',
        display: 'block',
        backgroundColor: theme.fn.primaryColor(),
        width: rem(45),
        height: rem(2),
        marginTop: theme.spacing.sm,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
  
    card: {
      border: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
      }`,
    },
  
    cardTitle: {
      '&::after': {
        content: '""',
        display: 'block',
        backgroundColor: theme.fn.primaryColor(),
        width: rem(45),
        height: rem(2),
        marginTop: theme.spacing.sm,
      },
    },
  }));
  
  export function FeaturesCards() {
    const { classes, theme } = useStyles();
    const features = mockdata.map((feature) => (
      <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
        <feature.icon size={rem(50)} stroke={2} color={theme.fn.primaryColor()} />
        <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
        <Text fz="sm" c="dimmed" mt="sm">
          {feature.description}
        </Text>
      </Card>
    ));
  
    return (
      <Container size="lg" py="xl">
        <Group position="center">
          <Badge variant="filled" size="lg">
            Nuestros Servicios
          </Badge>
        </Group>
  
        <Title order={2} className={classes.title} ta="center" mt="sm">
          Porque tus peluditos son nuestra prioridad
        </Title>
  
        <Text c="dimmed" className={classes.description} ta="center" mt="md">
          Contamos con veterinarios especializados para el cuidado de gatos. Equipo altamente capacitado para mantener a tus amigos felinos saludables y felices.
        </Text>
  
        <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
          {features}
        </SimpleGrid>
      </Container>
    );
  }