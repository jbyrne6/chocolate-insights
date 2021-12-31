import React from 'react';
import '../Styles/Welcome.css';
import styled from 'styled-components'

const UnList = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const ListItem = styled.li`
  color: black;
  // margin-left: 15%;
  // margin-right: 15%;
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 2vw;
  text-align: center;
`;

const PageTitle = styled.h3`
  color: black;
  font-size: 3vw;
  text-align: center;
`;

const Welcome = () => (
  <div>
    <PageTitle>Our bean to bar data visualization service is coming soon!</PageTitle>
  </div>

);

export default Welcome;