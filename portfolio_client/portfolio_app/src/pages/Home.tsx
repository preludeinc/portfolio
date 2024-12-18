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
      <Container className="home_container" fluid>
        <Grid className="inner" gutter={5}>
          <Grid.Col className="content" span={{ base: 12, md: 12, lg: 6 }}>
            <Title className="title">Home</Title>
            <Title c="cyan" order={2} mt={5} mb={30} ml={25}>
              Welcome! ☺️
            </Title>

            <List mt={20} spacing="lg" size="xl" ta={{ base: "left", md: "center" }}>
              <List.Item>
                I'm an aspiring developer with an interest in Cybersecurity.
              </List.Item>
              <List.Item>
                I studied Psychology prior to transitioning into tech.
              </List.Item>
              <List.Item>
                I love dogs, good coffee, hiking, & tabletop games.
              </List.Item>
            </List>

            <Text size="xl" mt={30} mb={10} ta="center">
              More of my work is available here:
            </Text>

            <Group justify="center" mt={5}>
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
          <Grid.Col className="content" span={{ base: 12, md: 12, lg: 6 }}>
            <Center>
              <Image
                src={image}
                radius="md"
                h={{ base: 350, md: 500, lg: 550 }}
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
