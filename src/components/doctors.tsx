import { ThemeIcon, Text, Title, Container, Card, SimpleGrid, createStyles, rem, Avatar } from '@mantine/core';

interface FeatureProps {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <div>
      <ThemeIcon variant="light" size={40} radius={40}>
        <Icon size="1.1rem" stroke={1.5} />
      </ThemeIcon>
      <Text mt="sm" mb={7}>
        {title}
      </Text>
      <Text size="sm" color="dimmed" sx={{ lineHeight: 1.6 }}>
        {description}
      </Text>
    </div>
  );
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    marginBottom: theme.spacing.md,
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(28),
      textAlign: 'left',
    },
  },

  description: {
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      textAlign: 'left',
    },
  },
  card: {
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },
}));

export function FeaturesGrid() {
  const { classes } = useStyles();

  return (
    <Container className={classes.wrapper}>
      <Title className={classes.title}>Nuestros Medicos Veterinarios</Title>

      <Container size={560} p={0}>
        <Text size="sm" className={classes.description}>
          Contamos con una excelente experiencia de parte de nuestros medicos veterinarios.
        </Text>
      </Container>

      <SimpleGrid
        mt={60}
        cols={2}
        spacing={50}
        breakpoints={[
          { maxWidth: 980, cols: 2, spacing: 'xl' },
          { maxWidth: 755, cols: 1, spacing: 'xl' },
        ]}
      >
        <Card key={'title1'} shadow="md" radius="md" className={classes.card} padding="xl">
            <Avatar src={'cuttedCat.png'} size={120} radius={120} mx="auto" />
            <Text ta="center" fz="lg" weight={500} mt="md">
                John Doe
            </Text>
            <Text ta="center" c="dimmed" fz="sm">
                Medico Veterinario
            </Text>
        </Card>
        <Card key={'title2'} shadow="md" radius="md" className={classes.card} padding="xl">
            <Avatar src={'cuttedCat.png'} size={120} radius={120} mx="auto" />
            <Text ta="center" fz="lg" weight={500} mt="md">
                Yessie Smith
            </Text>
            <Text ta="center" c="dimmed" fz="sm">
                Medico Veterinario
            </Text>
        </Card>
      </SimpleGrid>
    </Container>
  );
}