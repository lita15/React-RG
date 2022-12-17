// TODO: answer here
import { SimpleGrid, Container, Select } from "@chakra-ui/react";
import React from "react";
import { useState, useEffect } from "react";
import Card from "../src/Cards";

function Home() {
  const [card, setCard] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sorted, setSorted] = useState("");

  useEffect(() => {
    const getCard = async () => {
      const data = await fetch(
        "https://db.ygoprodeck.com/api/v7/cardinfo.php?banlist=tcg&level=4"
      );
      const parse = await data.json();
      console.log(parse.data);
      setCard(parse.data);
      setLoading(true);
    };
    getCard();
  }, []);

  function sortData() {}
  const getSort = () => {
    const data = [...card];
    if (sorted === "Name") {
      data.sort((typeA, typeB) => (typeA.name > typeB.name ? 1 : -1));
      // console.log("tes", data);
    }
    if (sorted === "Attack") {
      data.sort((typeA, typeB) => (typeA.atk < typeB.atk ? -1 : 1));
      // console.log("tes", data);
    }
    if (sorted === "Defence") {
      data.sort((typeA, typeB) => (typeA.def < typeB.def ? -1 : 1));
      // console.log("tes", data);
    }
    setCard(data);
  };
  return (
    <Container>
      <Select
        name="sort"
        onChange={(e) => setSorted(e.target.value)}
        onClick={getSort}
      >
        <option>Sort by</option>
        <option value="Name">Name</option>
        <option value="Attack">Attack</option>
        <option value="Defence">Defence</option>
      </Select>
      {loading ? (
        <>
          {card.map((e) => {
            return (
              <>
                <SimpleGrid>
                  <Card card={e} />
                </SimpleGrid>
              </>
            );
          })}
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </Container>
  );
}

export default Home;
