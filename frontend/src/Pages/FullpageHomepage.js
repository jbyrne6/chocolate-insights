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
import About from '../Pages/About.js'

const anchors = ["Welcome", "About"];

const FullpageHomepage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */
    anchors={anchors}
    // navigation
    sectionsColor={['', "#113227"]}

    render={({ state, fullpageApi }) => {
      return (
        <div>
          <ReactFullpage.Wrapper>  
            <div className="section first-page active">
              {/* <button onClick={() => fullpageApi.moveSectionDown()}>
                Click me to move down
              </button> */}
            </div>
            <div className="section second-page">
              <About />
            </div>
          </ReactFullpage.Wrapper>
        </div>

      );
    }}
  />
);

export default FullpageHomepage;