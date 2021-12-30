import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import '../Styles/FullpageHomepage.css';
import {
  MDBContainer, 
  MDBRow, 
  MDBCol,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';
import Who from '../Pages/About/Who'
import What from '../Pages/About/What'
import Why from '../Pages/About/Why'
import How from '../Pages/About/How'

const anchors = ["Welcome", "Who", "What", "Why", "How"];

const FullpageHomepage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */
    anchors={anchors}
    navigation
    sectionsColor={['white', "#118ab2", "#06d6a0", "#ffd166", "#ef476f"]}

    render={({ state, fullpageApi }) => {
      return (
        <div>
          <ReactFullpage.Wrapper>  
            <div className="section first-page active">
              {/* <button onClick={() => fullpageApi.moveSectionDown()}>
                Click me to move down
              </button> */}
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