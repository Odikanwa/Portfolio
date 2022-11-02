import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello from <br />
          Michael Odikanwa
        </SectionTitle>
        <SectionText>
          Technical support turned full-stack developer passionate about
          translating thoughts into code and building apps that solves
          everyday's problems. Knowlegeable in Python and JavaScript.
        </SectionText>
        <Button onClick={props.handleClick}>Let's talk</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
