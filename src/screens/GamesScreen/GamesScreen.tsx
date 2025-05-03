import * as React from "react";
import styled from "@emotion/styled";

import { Headline } from "../../components/Text";
import { Column } from "@components/Column.tsx";
import { GameCard } from "@screens/GamesScreen/GameCard.tsx";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const games = [
  {
    imageSrc: "./images/farm.jpg",
    name: "Ganja Farm",
    description: "Buy seeds for $moken, grow and sell Ganja, get $joints",
    gameLink: "https://t.me/smoke_dao_fun_bot/ganja_farm"
  },
  // {
  //   imageSrc: "./images/roller.jpg",
  //   name: "OG Roller",
  //   description: "Spin the Grinder, score the joints and get the $moken.",
  //   gameLink: "/"
  // }
];

export const GamesScreen: React.FC = () => {
  return (
    <Root>
      <Headline>Games</Headline>
      <Column gap="16px">
        {games.map(({ imageSrc, name, description, gameLink }) => (
          <GameCard
            key={name}
            description={description}
            gameLink={gameLink}
            imageSrc={imageSrc}
            name={name}
          />
        ))}
      </Column>
    </Root>
  );
};
