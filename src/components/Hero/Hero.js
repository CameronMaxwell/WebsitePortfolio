import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <div>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          Hello! I'm Cameron, a Computer Science student from Western University.
        </SectionText>
        <Button onClick={() => window.location.href = 'mailto:cameronrmaxwell.com'}> Contact Me </Button>
      </LeftSection>
    </Section>
  </div>
);

export default Hero;