import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './LanguagesStyles';

const Technologies = () =>  (
 <Section id="languages">
   <SectionDivider />
   <br />
   <br />
   <SectionTitle>Languages</SectionTitle>
   <SectionText>
    Throughout university, I have worked with various frameworks and languages. Listed below are some extra projects I've worked on:
   </SectionText>
   <List>
    <ListItem>
      <ListContainer>
        <ListTitle>Python</ListTitle>
        <ListParagraph>
          Tweets Analysis Program <br></br>
          Country Classes
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <ListContainer>
        <ListTitle>C | C++</ListTitle>
        <ListParagraph>
          Web-based Wordle <br></br>
          Password Hacker <br></br>
          Optimal Train System
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <ListContainer>
        <ListTitle>Java</ListTitle>
        <ListParagraph>
          Maze Path Finder <br></br>
          Snake Game
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <ListContainer>
        <ListTitle>SQL</ListTitle>
        <ListParagraph>
          Database Scripts
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <ListContainer>
        <ListTitle>HTML | CSS | JS</ListTitle>
        <ListParagraph>
          Portfolio Website
        </ListParagraph>
      </ListContainer>
    </ListItem>
   </List>
 </Section>
);

export default Technologies;
