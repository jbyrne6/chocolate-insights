import React from 'react';
import '../../Styles/What.css';
import {} from 'mdb-react-ui-kit';
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
  font-size: 1.5em;
  font-size: 2vw;
`;

const What = () => (
  <div>
    <PageTitle>What</PageTitle>
    <PageContents>
      <b>Chocolate Insights</b> is a service dedicated to enhancing the chocolate buying experience by <b>erasing the information barrier</b> between choco lovers and their bars.
      Our service will allow <b>interactive visualizations</b> of bean to bar data to be presented to <b>customers' phones</b> while browsing in-store via <b>QR code</b> technology.
    </PageContents>
  </div>
);

export default What;