// TODO: answer here

import React from "react";
import { Box, Image, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Card({ card }) {
  return (
    <>
      <Link to={`/card/${card.id}`}>
        <Box className="yugioh-card">
          <Image src={card.card_images[0].image_url} />
          <Heading>
            <h2>{card.name}</h2>
          </Heading>
        </Box>
      </Link>
    </>
  ); //
}

export default Card;
