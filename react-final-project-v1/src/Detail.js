// TODO: answer here
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Image, Container, Heading, Text } from "@chakra-ui/react";

function Detail() {
  const [detail, setDetail] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getData = async (id) => {
      const data = await fetch(
        `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`
      );
      const parse = await data.json();
      console.log(parse.data);
      setDetail(parse.data);
      setLoading(true);
    };
    getData(id);
  }, [id]);

  return (
    <>
      {loading ? (
        <>
          {detail.map((e) => {
            return (
              <Container>
                <Box>
                  <Image src={e.card_images[0].image_url} />
                  <Heading>
                    <h2>{e.name}</h2>
                  </Heading>
                  <Text>Level: {e.level}</Text>
                  <Text>{e.attribute}</Text>
                  <Text>
                    ATK/{e.atk} DEF/{e.def}
                  </Text>
                  <Text>
                    [ {e.type} / {e.race} ]
                  </Text>
                  <Text>{e.desc}</Text>
                </Box>
                {e.card_sets.map((card_sets) => {
                  return (
                    <Box>
                      <Text>Name: {card_sets.set_name}</Text>
                      <Text>Code: {card_sets.set_code}</Text>
                      <Text>Rarity: {card_sets.set_rarity}</Text>
                      <Text>Price: {card_sets.set_price}</Text>
                    </Box>
                  );
                })}
              </Container>
            );
          })}
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}

export default Detail;
