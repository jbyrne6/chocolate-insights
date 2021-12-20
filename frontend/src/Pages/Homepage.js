import '../Styles/App.css';
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

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: #0c0c0c;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 1px;
  background: #7cc1ac;
`;

const PageBackground = styled.section`
  background: #7cc1ac;
  height: 100vh;
`;

const Emoji = styled.section`
  font-size: 4em;
  text-align: center;
  padding-top: 1em;
  padding-bottom: 1em;
`;

const Announcement = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: #0c0c0c;
  padding-top: 1em;
  padding-bottom: 1em;
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
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>
          Chocolate Insights
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        {/* <MDBCollapse navbar show={true}> */}
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
          </MDBNavbarNav>
        {/* </MDBCollapse> */}
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Homepage;