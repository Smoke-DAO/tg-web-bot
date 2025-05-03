import * as React from "react";
import { ActionCard } from "../../components/ActionCard";
import { Section } from "../../components/Section";
import { Headline, Title, Body } from "../../components/Text";
import { Root, AboutSection } from "./styles";

const farmCards = [
  {
    title: "Play Games",
    backgroundImage: "./images/games.jpg",
    href: "/games",
  },
  {
    title: "Proof of Puff",
    backgroundImage: "./images/proof_of_puff.jpg",
    href: "/proof-of-puff",
  }
]

const mintSpendCards = [
  {
    title: "Mint",
    backgroundImage: "./images/mint.jpg",
    href: "/mint-joint",
  },
  {
    title: "Spend",
    backgroundImage: "./images/spend.jpg",
    href: "/spend-joint",
  },
]

export const WelcomeScreen: React.FC = () => {
  return (
    <Root>
      <Headline>Welcome to Smoke DAO!</Headline>
      <AboutSection>
        <Title>About Smoke DAO</Title>
        <Body style={{ opacity: 0.8, marginTop: 8 }}>
          Farm $moken in games and for inviting new members to the community through Proof of Puff.
          Mint $joint for $moken and exchange them for real joints in our partner shops around the
          world.
        </Body>
      </AboutSection>

      <Section title="Farm $MOKEN">
        {farmCards.map((card) => (
          <ActionCard
            title={card.title}
            backgroundImage={card.backgroundImage}
            href={card.href}
          />
        ))}
      </Section>

      {/* <Section title="Farm $JOINT">
        {mintSpendCards.map((card) => (
          <ActionCard
            title={card.title}
            backgroundImage={card.backgroundImage}
            href={card.href}
          />
        ))}
      </Section> */}
    </Root>
  );
};
