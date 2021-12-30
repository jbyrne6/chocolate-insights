import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import '../Styles/About.css';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';
import styled from 'styled-components'
import Navbar from '../Components/Navbar.js'
import CustomNavbar from '../Components/CustomNavbar.js'

const ListItem = styled.li`
  list-style-type: none;
`;

const anchors = ["Welcome", "About"];

const About = () => (
    <MDBCarousel showIndicators showControls fade className="customCarousel">
        <MDBCarouselInner>
        <MDBCarouselItem className='active'>
            <MDBCarouselElement src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).webp' alt='...' />
            <MDBCarouselCaption>
            <h5>Who</h5>
            <p>
              We are dedicated team of chocolate enthusiasts seeking fuse our love of <b>craft chocolate</b> with our love of <b>technology and data</b>.
            </p>
            </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem>
            <MDBCarouselElement src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).webp' alt='...' />
            <MDBCarouselCaption>
            <h5>What</h5>
            <p>
              <b>Chocolate Insights</b> is a service dedicated to enhancing the chocolate buying experience by <b>erasing the information barrier</b> between choco lovers and their bars.
              Our service will allow <b>interactive visualizations</b> of bean to bar data to be presented to <b>customers' phones</b> while browsing in-store via <b>QR code</b> tehcnology.
            </p>
            </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem>
            <MDBCarouselElement src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).webp' alt='...' />
            <MDBCarouselCaption>
            <h5>Why</h5>
            <ul>
              <ListItem>Help <b>customers</b> learn about chocolate</ListItem>
              <ListItem>Help <b>sellers</b> increase bar purchases</ListItem>
              <ListItem>Help <b>makers</b> tell their stories</ListItem>
              <ListItem>Help <b>growers</b> and <b>producers</b> get exposure</ListItem>
            </ul>
            </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem>
            <MDBCarouselElement src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).webp' alt='...' />
            <MDBCarouselCaption>
            <h5>How</h5>
            <ul>
              <ListItem><b>Find</b> your bar in the Chocolate Insights Database</ListItem>
              <ListItem><b>Customize</b> your bean to bar visualization</ListItem>
              <ListItem><b>Receive</b> the QR code associated with your visual</ListItem>
              <ListItem><b>Print</b> out the QR code and <b>put</b> it near your bar in store</ListItem>
              <ListItem><b>Watch</b> as your customers' chocolate knowledge, and sales, <b>increase</b>!</ListItem>
            </ul>
            </MDBCarouselCaption>
        </MDBCarouselItem>
        </MDBCarouselInner>
    </MDBCarousel>
);

export default About;