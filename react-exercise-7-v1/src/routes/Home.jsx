import React from "react";
import { Link } from "react-router-dom";
import people from "../assets/people.jpeg";
import planets from "../assets/planets.jpeg";
import movies from "../assets/movies.jpeg";
import { Container } from "@chakra-ui/react";
import {
  Card,
  Image,
  SimpleGrid,
  Text,
  CardBody,
  Button,
} from "@chakra-ui/react";

const Home = () => {
  return (
    //  Align the Container to middle vertically
    <Container>
      <SimpleGrid columns={3} spacing={2} marginTop={200}>
        {/* TODO: answer here */}
        <Link to="/star-wars/people">
          <Button>
            <Text>People</Text>
          </Button>
        </Link>
        <Link to="/star-wars/planets">
          <Button>
            <Text>Planets</Text>
          </Button>
        </Link>
        <Link to="/star-wars/movies">
          <Button>
            <Text>Movies</Text>
          </Button>
        </Link>
      </SimpleGrid>
    </Container>
  );
};

export default Home;
