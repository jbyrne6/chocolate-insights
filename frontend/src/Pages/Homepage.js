import '../Styles/Homepage.css';
import { useCallback, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBCard, 
  MDBCardBody, 
  MDBCardTitle, 
  MDBCardText,
  MDBCardHeader,
  MDBTypography
} from 'mdb-react-ui-kit';
import styled from 'styled-components'
import axios from 'axios';

const PageBackground = styled.section`
  background-color: #F8EDE3;
  height: 100%;
`;

const NavbarBackground = styled.section`
  // background: #FFE2C1;
  background: #F8EDE3;
`;

const TitleSubtitle = styled.p`
  color: #000000;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 18px; 
`;

const Section = styled.div`
  margin-left: 25%;
  margin-right: 25%;
  margin-top: 35px;
  margin-bottom: 35px;
`

const SectionHeader = styled.h2`
  color: #000000;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;
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
  const [bars, setBars] = useState('')
  const [showBasic, setShowBasic] = useState(false);

  const getAllBars = useCallback(async () => {
    // we will use nginx to redirect it to the proper URL
    const allBars = await axios.get("/api/");
    // setBars(allBars.data.rows.map(row => row.number))
    console.log(allBars)
  }, []);

  return (
    <PageBackground>
      <NavbarBackground>
      <MDBNavbar expand='lg' sticky light className="sticky-top">
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <MDBTypography tag='div' className='display-5'>
              Chocolate Insights
            </MDBTypography>
          </MDBNavbarBrand>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link'>
                  We Are
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <MDBDropdownLink href='who'>Who</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink href='#what'>What</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink href='#why'>Why</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink href='#how'>How</MDBDropdownLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink disabled href='#' aria-disabled='true'>
                Chocolate Discovery Map
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink disabled href='#' aria-disabled='true'>
                Craft Bar Database
              </MDBNavbarLink>
            </MDBNavbarItem>
            </MDBNavbarNav>
        </MDBContainer>
      </MDBNavbar>
      </NavbarBackground>
      <Section>
        <SectionHeader>Welcome to Chocolate Insights!</SectionHeader>
        <SectionContents>
          In the works is a service allowing chocolate makers and sellers to pull back the curtain of the <b>bean to bar process</b> for all chocolate enthusiasts.
          Learn below what we are about:
        </SectionContents>
      </Section>

      <Section id="who">
        <SectionHeader>
          Who
        </SectionHeader>
        <MDBCard className="about-card">
          <MDBCardBody>
            <SectionContents>
            We are dedicated team of chocolate enthusiasts seeking fuse our love of <b>craft chocolate</b> with our love of <b>technology and data</b>. 
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
              Our service will allow <b>interactive visualizations</b> of bean to bar data to be presented to <b>customers' phones</b> while browsing in-store via <b>QR code</b> tehcnology.
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
            {/* <SectionContents> */}
              <MDBCardHeader className="about-card-header">
                How to use our service for your <b>bean to bar visualizations</b>
              </MDBCardHeader>
            {/* </SectionContents> */}
            <SectionContents>
              <ol class="">
                <CustomListItem><b>Find</b> your bar in the Chocolate Insights Database</CustomListItem>
                <CustomListItem><b>Customize</b> your visualization</CustomListItem>
                <CustomListItem><b>Receive</b> the QR code associated with your visual</CustomListItem>
                <CustomListItem><b>Print</b> out the QR code and <b>put</b> it near your bar</CustomListItem>
                <CustomListItem><b>Watch</b> as your customers' chocolate knowledge, and sales, increase!</CustomListItem>
              </ol>
            </SectionContents>
          </MDBCardBody>
        </MDBCard>
      </Section>
    </PageBackground>
  );
}

export default Homepage;