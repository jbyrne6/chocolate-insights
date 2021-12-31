import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import '../Styles/Homepage.css';
import {
  MDBCard, 
  MDBCardBody, 
  MDBCardHeader,
} from 'mdb-react-ui-kit';
import styled from 'styled-components'
import Navbar from '../Components/Navbar.js'

const PageBackground = styled.section`
  // background-color: #F8EDE3;
  background-color: white;
  height: 100%;
`;

const Section = styled.div`
  margin-left: 25%;
  margin-right: 25%;
  margin-top: 35px;
  margin-bottom: 35px;
`

const MainTitleSection = styled.div`
  margin-left: 15%;
  margin-right: 15%;
  margin-top: 35px;
  margin-bottom: 35px;
`

const SectionHeader = styled.h3`
  color: #000000;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const MainWebsiteHeading = styled.h1`
  color: #000000;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const WebsiteSubheading = styled.h4`
  color: #000000;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 50px;
`;

const SectionContents = styled.p`
  color: #000000;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 18px; 
`;

const CustomListItem = styled.li`
  margin-top: 15px;
  margin-bottom: 15px;
`;

function Homepage() {
  return (
    <body>
      <PageBackground className='full-page-image-bg'>
        <Navbar />
        <MainTitleSection>
          {/* <MainWebsiteHeading>Welcome to Chocolate Insights!</MainWebsiteHeading> */}
          <WebsiteSubheading>
            Currently under development, <b><i>Chocolate Insights</i></b> will be a service to help pull back the curtain of the <b><i> craft chocolate bean to bar process</i></b> for all chocolate lovers.
          </WebsiteSubheading>
          <WebsiteSubheading>
            Learn what we are about below.
          </WebsiteSubheading>
        </MainTitleSection>
        <Section id="who">
          <SectionHeader>
            Who
          </SectionHeader>
          <MDBCard className="about-card">
            <MDBCardBody>
              <SectionContents>
              We are dedicated team of chocolate enthusiasts seeking to fuse our love of <b>craft chocolate</b> with our love of <b>technology and data</b>. 
            </SectionContents>
            </MDBCardBody>
          </MDBCard>
        </Section>
        <Section id="what">
          <SectionHeader>
          What
          </SectionHeader>
          <MDBCard className="about-card">
            <MDBCardBody>
              <SectionContents>
                <b>Chocolate Insights</b> is a service dedicated to enhancing the chocolate buying experience by <b>erasing the information barrier</b> between choco lovers and their bars.
                Our service will allow <b>interactive visualizations</b> of bean to bar data to be presented to <b>customers' phones</b> while browsing in-store via <b>QR code</b> technology.
              </SectionContents>
            </MDBCardBody>
          </MDBCard>
        </Section>
        <Section id="why">
          <SectionHeader>
          Why
          </SectionHeader>
          <MDBCard className="about-card">
            <MDBCardBody>
              <SectionContents>
                <ol class="chocolate-list">
                  <CustomListItem>Help <b>customers</b> learn about chocolate</CustomListItem>
                  <CustomListItem>Help <b>sellers</b> increase bar purchases</CustomListItem>
                  <CustomListItem>Help <b>makers</b> tell their stories</CustomListItem>
                  <CustomListItem>Help <b>growers</b> and <b>producers</b> get exposure</CustomListItem>
                </ol>
              </SectionContents>
            </MDBCardBody>
          </MDBCard>
        </Section>
        <Section id="how">
          <SectionHeader>
          How
          </SectionHeader>
          <MDBCard className="about-card">
            <MDBCardBody>
                <MDBCardHeader className="about-card-header">
                  How to use our service for your <b>bean to bar visualizations</b>
                </MDBCardHeader>
              <SectionContents>
                <ol>
                  <CustomListItem><b>Find</b> your bar in the Chocolate Insights Database</CustomListItem>
                  <CustomListItem><b>Customize</b> your bean to bar visualization</CustomListItem>
                  <CustomListItem><b>Receive</b> the QR code associated with your visual</CustomListItem>
                  <CustomListItem><b>Print</b> out the QR code and <b>put</b> it near your bar in store</CustomListItem>
                  <CustomListItem><b>Watch</b> as your customers' chocolate knowledge, and sales, <b>increase</b>!</CustomListItem>
                </ol>
              </SectionContents>
            </MDBCardBody>
          </MDBCard>
        </Section>
      </PageBackground>
      <PageBackground className="full-page-background"></PageBackground>
    </body>
  );
}

export default Homepage;