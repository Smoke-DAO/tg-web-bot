import * as React from "react";
import { ActionCard } from "../components/ActionCard";
import { Section } from "../components/Section";
import styled from "@emotion/styled";
import { Headline, Title, Body } from "../components/Text";

const Root = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

const AboutSection = styled.div`
  display: flex;
  margin-top: 24px;
  max-width: 100%;
  width: 390px;
  flex-direction: column;
  color: #fff;
  justify-content: start;
`;

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
        <ActionCard
          title="Play Games"
          backgroundImage="https://s3-alpha-sig.figma.com/img/59c8/b33e/e51a92613abd166d61aeea44a8658ef4?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hkNZdWZv58SEPtIHhP6Q7OIabvSk7ARh4xMuPen4m7eVGlKPC6fzNooE6ACltcuWZb2MjISMJdNkOhNoBs4A0p5RAzFwtpca~1KdN8RHUEuAppLB8tal7FC~BiyefC28AZM2T81JpB5I05pHEyMhlCb95nR2hfIpVE2b2nNgy~Bp1YYMeKyJZ0pdLqxrmLNbeBWKyA37lklUTZA92RIXwemiF7An6I5jikglwiLg4x-3xFtsTkS4hHM156bsu6cdg8dvOFxoSQAwBH8snf5ilQhunFapmiJdmLNMa1z7y97fezSVhr1BMXQJkZk5Y44TNV6qDZMQj0ElCgC75netkA__"
        />
        <ActionCard
          title="Proof of Puff"
          backgroundImage="https://s3-alpha-sig.figma.com/img/afdf/e3f7/91789ce0a22761e534c664221b8bccf7?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WsEnwKKU7Iqx4DG2SPxkbU2KqpGm563WwUN5Sj2WeYxaR0S2v3dmBVbdHxoDRBQWY5w82mwkMBiMKdW4E0NSyjUTVlhJrXVL1H-FM5yQ0-7J7ko0fNG1eSn4eEufeHH7HA7FGD0Wsl82t5yldtxTZBOhX21PYkcSb3K0mAoVKpFpO0pomheU6-BuF4ioDJCWVID37qbrKs6yaG3tyoMzMMxAxuJ~YpVoNOUyZ4jL5wKEM-E9yemm1GUomk1prJnV05ggeED7OhY-DrkjafxrAebI1hXgv3h149hGcAoGrkv8fWhrmohGePJsGfxlNqfcb5gMb4n0QXWQRI8jxrORCg__"
        />
      </Section>

      <Section title="Farm $JOINT">
        <ActionCard
          title="Mint"
          backgroundImage="https://s3-alpha-sig.figma.com/img/45ce/052f/ac02c511031cffd204ca552852d2729c?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RW53ENgsm-6o2F0giCOqgjSoxW5nvwAJOzwTYHZlRPc2TmG3BmZEuUvHpvi8vCd7VIufc5zROL36tRwK~zELhmNzR~UgEG1g5WX-PTYIKUoFUE~B6UbihbWyOabQkOfR8IVjEwtlUadszOF0P80AHv9nFCuThRWLJ0zq050RZzk1SK2q2~mZMfgHOonPwMrtKo0mCOf0v36yoIWjlmp~tZIn5Cjxjkjz8HrIopi740nRNDgjp124sNvIlnxLl18wLJphnWoAMjsShNctZZHvwMXBTFcMPw38yg8DpSqy-YsSqYNKucaGEmPWL9nA4cR2Q5lnGbQDZtcOtOipkcumsw__"
        />
        <ActionCard
          title="Spend"
          backgroundImage="https://s3-alpha-sig.figma.com/img/7efa/6763/8ee96a7794ffadf8530ac4eef54950f3?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ki4qfhXKWf6fxNqidu-4tmggyOQqD~iM152hwlEN0qqleuA9vdms4bEZ25Nk0OFoWR3qSrYbeED3ARwoNDHnQxSkA0gk-~ur4yG6lWU9rpkNb-jZWipJ5ipkXHxLIYBKNo8lpkaeryIKU3~OcT5CgwWnk7SdwQNCEK9TGmAPahi59NnFZVsCoJ3cmsAGnxjL~McGyoSr~fGjqROy-7b50aYwl3U1Pj49exbGRG4AyL4Hzlc3YiBClnOHZKJJh16gHGPHVyuviYWkjcPPw5kdD4TljqK5E9nNGWwOD87IEHPCCMBEajCr24Kmr0d2CrbKpFjGG6dlGzN41G96tkKqFA__"
        />
      </Section>
    </Root>
  );
};
