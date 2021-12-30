import React from 'react';
import '../../Styles/Who.css';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';
import styled from 'styled-components'

const PageTitle = styled.h2`
  color: black;
  text-align: center;
  font-size: 4vw;
`;

const PageContents = styled.p`
  color: black;
  text-align: center;
  margin-left: 15%;
  margin-right: 15%;
  font-size: 2vw;
`;

const Who = () => (
    <div>
      <PageTitle>Who</PageTitle>
      <PageContents>
        We are dedicated team of chocolate enthusiasts seeking fuse our love of <b>craft chocolate</b> with our love of <b>technology and data</b>.
      </PageContents>
    </div>
);

export default Who;