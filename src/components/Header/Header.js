import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
        <a style={{ display: "flex", alignItems: "center", color: 'white', marginBottom: '20px'}}>
          <DiCssdeck size="4rem" /> <Span>Cameron's Portfolio</Span>
        </a>
    </Div1>
    <Div2 style={{ marginTop: '29px'}}>
      <li>
        <a href="#projects" style={{ color: 'white', textDecoration: 'none', fontSize: '2rem' }}>Projects</a>
      </li>
      <li>
        <a href="#languages" style={{ color: 'white', textDecoration: 'none', fontSize: '2rem' }}>Languages</a>
      </li>
      <li>
        <a href="#about" style={{ color: 'white', textDecoration: 'none', fontSize: '2rem' }}>About</a>
      </li>
    </Div2>
    <Div3>
      <Container>
      <SocialIcons href='https://github.com/CameronMaxwell' target="_blank">
        <AiFillGithub size="5rem" />
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/cameronrmaxwell/' target="_blank">
        <AiFillLinkedin size="5rem" />
      </SocialIcons>
      </Container>
    </Div3>
  </Container>
);

export default Header;
