import '../Styles/Navbar.css'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBTypography
} from 'mdb-react-ui-kit';
import styled from 'styled-components'


const NavbarBackground = styled.section`
//   background: white;
  background: #F8EDE3;
`;

function Navbar() {
  return (
        <NavbarBackground>
        <MDBNavbar expand='lg' sticky light className="sticky-top">
          <MDBContainer fluid>
            <MDBNavbarBrand href='#'>
              <MDBTypography tag='div' className='display-6'>
                Chocolate Insights
              </MDBTypography>
            </MDBNavbarBrand>
              <MDBNavbarNav  className='mr-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle tag='a' className='nav-link'>
                    We Are
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem>
                      <MDBDropdownLink href='#who' className='navbar-dropdown-item'>Who</MDBDropdownLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <MDBDropdownLink href='#what' className='navbar-dropdown-item'>What</MDBDropdownLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <MDBDropdownLink href='#why' className='navbar-dropdown-item'>Why</MDBDropdownLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <MDBDropdownLink href='#how' className='navbar-dropdown-item'>How</MDBDropdownLink>
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
  );
}

export default Navbar;