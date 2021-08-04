import React from 'react';
import styled from 'styled-components';
import Ptext from './PText';
import MapImg from '../assets/images/Map.jpeg';

const MapStyles = styled.div`
  background-image: url(${MapImg});
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 40%;
    bottom: 20%;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Here is me</h3>
          <Ptext>Rio Cuarto,Cordoba</Ptext>
          <a
            href="https://goo.gl/maps/YTqFxqHbeqJduakG8"
            target="_blank"
            rel="noreferrer"
          >
            Open in Google maps
          </a>
        </div>
      </div>
    </MapStyles>
  );
}
