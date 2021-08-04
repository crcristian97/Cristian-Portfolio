import React from 'react';
import { MdDesktopMac } from 'react-icons/md';
import styled from 'styled-components';
import Ptext from './PText';

const ItemStyle = styled.div`
  text-align: center;
  .servicesitem__icon {
    svg {
      width: 3rem;
    }
  }
  .servicesitem__title {
    font-size: 2.5rem;
    font-family: 'Montserrat SemiBold';
  }
  .para {
    margin-top: 2rem;
  }
`;

export default function ServiceSectionItems({
  icon = <MdDesktopMac />,
  title = 'web design',
  desc = 'Lorem Inputs',
}) {
  return (
    <ItemStyle>
      <div className="servicesitem__icon">{icon}</div>
      <div className="servicesitem__title">{title}</div>
      <Ptext>{desc}</Ptext>
    </ItemStyle>
  );
}
