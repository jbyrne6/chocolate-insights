import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import '../Styles/FullpageHomepage.css';
import styled from 'styled-components'
import {
  MDBContainer, 
  MDBRow, 
  MDBCol,
  MDBIcon 
} from 'mdb-react-ui-kit';

import Welcome from '../Pages/Welcome'
import Who from '../Pages/About/Who'
import What from '../Pages/About/What'
import Why from '../Pages/About/Why'
import How from '../Pages/About/How'

const ScrollDownButton = styled.button`
  // background-color: #118ab2;
  text-align: center;
  border: 3px solid black;
`;

const PageTitle = styled.h3`
  color: black;
  font-size: 3vw;
  padding-bottom: 15px;
`;

const ScrollDown = styled.h4`
  color: black;
  font-size: 2vw;
  padding-top: 15px;
`;

const ScrollDownLink = styled.a`
  color : black;
  &:hover {
    color: black;
  }
`

const anchors = ["Welcome", "Who", "What", "Why", "How"];

const FullpageHomepage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */
    anchors={anchors}
    navigation
    // sectionsColor={["#118ab2", "#06d6a0", "#ffd166", "#ef476f", "#9d4edd"]}
    sectionsColor={["#007853", "#118ab2", "#9d4edd", "#ffd166", "#ef476f"]}

    render={({ state, fullpageApi }) => {
      return (
        <div>
          <ReactFullpage.Wrapper>  
            <div className="section active">
              {/* <ScrollDownButton onClick={() => fullpageApi.moveSectionDown()}>
                <h3>Click me to move down</h3>
              </ScrollDownButton> */}
              <Welcome />
            </div>
            <div className="section">
              <Who />
            </div>
            <div className="section">
              <What />
            </div>
            <div className="section">
              <Why />
            </div>
            <div className="section">
              <How />
            </div>
          </ReactFullpage.Wrapper>
        </div>

      );
    }}
  />
);

export default FullpageHomepage;