import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import '../../Styles/Why.css';
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

const UnList = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const ListItem = styled.li`
  color: black;
  margin-left: 15%;
  margin-right: 15%;
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 2vw;
  text-align: center;
`;

const Why = () => (
  <div>
    <PageTitle>Why</PageTitle>
    <UnList>
      <ListItem>Help <b>customers</b> learn about chocolate</ListItem>
      <ListItem>Help <b>sellers</b> increase bar purchases</ListItem>
      <ListItem>Help <b>makers</b> tell their stories</ListItem>
      <ListItem>Help <b>growers</b> and <b>producers</b> get exposure</ListItem>
    </UnList>
  </div>


);

export default Why;