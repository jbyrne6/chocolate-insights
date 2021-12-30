import React from 'react';
import '../../Styles/How.css';
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

const How = () => (
  <div>
    <PageTitle>How</PageTitle>
    <UnList>
        <ListItem><b>Find</b> your bar in the Chocolate Insights Database</ListItem>
        <ListItem><b>Customize</b> your bean to bar visualization</ListItem>
        <ListItem><b>Receive</b> the QR code associated with your visual</ListItem>
        <ListItem><b>Print</b> out the QR code and <b>put</b> it near your bar in store</ListItem>
        <ListItem><b>Watch</b> as your customers' chocolate knowledge, and sales, <b>increase</b>!</ListItem>
    </UnList>
  </div>

);

export default How;