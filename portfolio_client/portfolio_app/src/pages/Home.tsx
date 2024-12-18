import {
  Button,
  Center,
  Container,
  Grid,
  Group,
  Image,
  List,
  Text,
  Title,
} from "@mantine/core";
import image from "/coding.svg";
import { DefaultLayout } from "../layouts/Default";

export default function Home() {
  let homePage = 0;
  return (
    <DefaultLayout page={homePage}>
      <Container fluid>
        <Grid className="inner" gutter={5}>
          <Grid.Col className="content" span={{ base: 10, md: 12, lg: 6 }}>
            <Title className="title">Home</Title>
            <Title c="cyan" order={2} mt={20} mb={20}>
              Welcome! ☺️
            </Title>

            <Text ta="left" size="lg" mt={10} mb={5}>
              A bit about me:
            </Text>

            <List mt={20} spacing="lg" size="lg" ta={{ base: "left", lg: "center" }}>
              <List.Item>
                I'm an aspiring developer with an interest in CyberSecurity.
              </List.Item>
              <List.Item>
                I studied Psychology prior to transitioning into tech.
              </List.Item>
              <List.Item>
                I love dogs, good coffee, hiking, & tabletop games.
              </List.Item>
            </List>

            <Text ta="center" size="lg" mt={30} mb={5}>
              More of my work is available here:
            </Text>

            <Group justify="center" mt={20}>
              <Button variant="filled" color="cyan">
                <a href={"/websites"}>Websites</a>
              </Button>
              <Button variant="filled" color="cyan">
                <a href={"/games"}>Games</a>
              </Button>
              <Button variant="filled" color="cyan">
                <a href={"/engineering"}>Engineering</a>
              </Button>
            </Group>
          </Grid.Col>
          <Grid.Col className="content" span={{ base: 10, md: 12, lg: 6 }}>
            <Center>
              <Image
                src={image}
                radius="md"
                h={{ base: 250, md: 500, lg: 500 }}
                w="auto"
                fit="contain"
                className="image"
              />
            </Center>
          </Grid.Col>
        </Grid>
      </Container>
    </DefaultLayout>
  );
}
