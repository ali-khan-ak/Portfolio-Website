import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Ali Khan
        </SectionTitle>
        <SectionText>
        A Passionate Programmer with Commitment to utilize my skills to further increase my knowledge and others around me. Proficient in various platforms, languages, and embedded systems. Experienced with the latest cutting edge development tools and procedures. Knowledgeable in user interface, testing, and debugging processes. Able to effectively self- manage during independent projects, as well as collaborate as part of a productive team
        </SectionText>
        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;