import {
  Button,
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
      <Container size="lg">
        <Grid className="inner" gutter={10}>
          <Grid.Col span={10} className="content">
            <Title className="title">Home</Title>
            <Text c="cyan" mt={20} mb={20} size="xl">
              Welcome! ☺️
            </Text>

            <Text ta="left" size="xl" mt={5} mb={5}>
              A bit about me:
            </Text>

            <List mt={20} spacing="lg" size="xl">
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

            <Text ta="center" size="xl" mt={30} mb={5}>
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
          <Grid.Col span={2}>
            <Image src={image} className="image" />
          </Grid.Col>
        </Grid>
      </Container>
    </DefaultLayout>
  );
}
