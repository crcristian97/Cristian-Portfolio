import React from 'react';
import styled from 'styled-components';

import Button from './Button';
import Ptext from './PText';
import SectionTitle from './SectionTitle';
import AboutImg from '../assets/images/Aboutme.jpeg';

const AboutSectionStyled = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: right;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
    text-align: center;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  .aboutSection__img {
    height: 800px;
    width: 500px;
  }
  @media only screen and(max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
  }
  @media only screen and(max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyled>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle
            subheading="Let me introduce myself"
            heading="About me "
          />
          <Ptext>
            I have a degree in business administration and I specialize in
            programming. I've been in the world of web development for a year,
            making web pages for local businesses. I am a full stack programmer
            but I love the front end.
          </Ptext>
          <div className="aboutSection__buttons">
            <Button btnLink="/projects" btnText="Works" />
            <Button btnLink="/about" btnText="Read More" outline />
          </div>
        </div>
        <div className="aboutSection__img">
          <img src={AboutImg} alt="" />
        </div>
      </div>
    </AboutSectionStyled>
  );
}
