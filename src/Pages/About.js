import React from 'react';
import styled from 'styled-components';
import Ptext from '../components/PText';
import Button from '../components/Button';
import Aboutimg from '../assets/images/Aboutimg.jpeg';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContacBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2.rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 10rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3rem;
    text-transform: uppercase;
  }
  @media only screen and(max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi, I am <span>Cristian Cabrera</span>
            </p>
            <h2 className="about__heading">A freelancer Web Developer</h2>
            <div className="about__info">
              <Ptext>
                I am from Cordoba, Argentina. A place of beauty and nature.Since
                my childhood, i love basquetball and play computer game. I love
                to create things that can be usefull to others.
                <br />I started coding since I was in the university. Coding is
                also an art for me.I love it and now I have the opportunity to
                desgin along with the coding. I find it really interesting and I
                enjoyed the process a lot.
                <br />
                <br />
                My vision is to make the world better place.Now almost
                everithing is becoming better than ever. I am currently
                freelancing and tutoring javascrip at coder-house.
              </Ptext>
            </div>
            <Button btnText="Download CV" btnLink="#" />
          </div>
          <div className="right">
            <img src={Aboutimg} alt="Cristian Img" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            <AboutInfoItem title="School" items={['Galileo Galilei']} />
            <AboutInfoItem
              title="University"
              items={['Universidad Siglo 21']}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">MY SKILLS</h1>
            <AboutInfoItem
              title="Front end"
              items={['HTML', 'CSS', 'JavaScript', 'REACT', 'ANGULAR', 'VUE']}
            />
            <AboutInfoItem title="Back End" items={['Node JS']} />
            <AboutInfoItem title="Database" items={['MySql']} />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">EXPERIENCES</h1>
            <AboutInfoItem
              title="Freelancer 2020-2021"
              items={['Junior Developer']}
            />
            <AboutInfoItem
              title="Coder-house 2021 "
              items={['Tutor Javascrip']}
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
