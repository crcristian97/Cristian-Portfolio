import React from 'react';
import styled from 'styled-components';
import { MdCode, MdDesktopMac, MdPhone } from 'react-icons/md';

import SectionTitle from './SectionTitle';
import ServiceSectionItems from './ServiceSectionItems';

const ServiceItemStyles = styled.div`
  padding: 10rem 0;
  .service__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .service__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServiceSection() {
  return (
    <ServiceItemStyles>
      <div className="container">
        <SectionTitle heading="Services" subheading="What i will do for you" />
        <div className="service__allItems">
          <ServiceSectionItems
            icon={<MdDesktopMac />}
            title="Websign Design"
            desc="I do ui/ux design for the website that helps website to get a unique look."
          />
          <ServiceSectionItems
            icon={<MdCode />}
            title="Web Development"
            desc="I also develop the website. I create high performance website with blazing fast speed"
          />
          <ServiceSectionItems
            icon={<MdPhone />}
            title="Websign Design"
            desc="Designs that adapt to all devices so you can view it from any screen "
          />
        </div>
      </div>
    </ServiceItemStyles>
  );
}
