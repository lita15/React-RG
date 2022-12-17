// TODO: answer here
import React from "react";
import { Box, Center, Heading } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Home from "../src/Home";
import Card from "../src/Cards";
import Detail from "../src/Detail";
import NotFound from "../src/NotFound";

const App = () => {
  const MyRouter = () => (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="card">
        <Route index element={<Card />} />
        <Route path=":id" element={<Detail />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );

  return (
    <div className="App">
      {/* Navbar */}
      <Box w="100vw" bg="#b25819" p={6}>
        <Center>
          <Heading as="h1" color="#e2ded5">
            Yugi-Oh Card Deck
          </Heading>
        </Center>
      </Box>

      {/* Route */}
      <MyRouter />
    </div>
  );
};

export default App;
