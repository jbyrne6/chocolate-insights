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
  MDBCollapse
} from 'mdb-react-ui-kit';
import styled from 'styled-components'
import axios from 'axios';

const PageBackground = styled.section`
  background-color: #FFE2C1;
  height: 100%;
`;

const NavbarBackground = styled.section`
  background: #FFE2C1;
`;

const PageTitle = styled.h2`
  color: #000000;
`;

const Section = styled.div`
  margin-left: 25%;
  margin-right: 25%;
  margin-top: 20px;
  margin-bottom: 20px;
`

const SectionHeader = styled.h3`
  color: #000000;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;

`;

const SectionContents = styled.p`
  color: #000000;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const CenteredDiv = styled.div`
  text-align: center;
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
      <MDBNavbar expand='lg' sticky light>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <PageTitle>Chocolate Insights</PageTitle>
          </MDBNavbarBrand>
          <MDBNavbarToggler
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link'>
                  We Are
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <MDBDropdownLink href='who-are-we'>Who</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink href='#what-are-we'>What</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink href='#why-are-we'>Why</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink href='#how-are-we'>How</MDBDropdownLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink disabled href='#' aria-disabled='true'>
                Discovery Map
              </MDBNavbarLink>
            </MDBNavbarItem>
            </MDBNavbarNav>
        </MDBContainer>
      </MDBNavbar>
      </NavbarBackground>
      <SectionHeader>Welcome to <b>Chocolate Insights</b>!</SectionHeader>
      <Section id="who-are-we">
        <SectionHeader>
          Who are We?
        </SectionHeader>
        <SectionContents>
          We are dedicated team of chocolate enthusiasts seeking fuse our love of <b>craft chocolate</b> with our love of <b>technology</b>.  
        </SectionContents>
      </Section>
      <Section id="what-are-we">
        <SectionHeader>
         What are We?
        </SectionHeader>
        <SectionContents>
        <b>Chocolate Insights</b> is a platform dedicated to enhancing the chocolate buying experience by <b>erasing the information barrier</b> between choco lovers and their bars.
        </SectionContents>
      </Section>
      <Section id="why-are-we">
        <SectionHeader>
         Why are We?
        </SectionHeader>
        <CenteredDiv>
          <ol class="chocolate-list">
            <li>Help <b>sellers</b> increase bar purchases</li>
            <li>Help <b>makers</b> tell their stories</li>
            <li>Help <b>growers</b> and <b>producers</b> be heard</li>
          </ol>
        </CenteredDiv>
      </Section>
      <Section id="how-are-we">
        <SectionHeader>
         How are We?
        </SectionHeader>
        <SectionContents>
         In the works is a service allowing chocolate makers and sellers to pull back the curtain of the <b>bean to bar process</b> for all chocolate enthusiasts.
        </SectionContents>
      </Section>
    </PageBackground>
  );
}

export default Homepage;