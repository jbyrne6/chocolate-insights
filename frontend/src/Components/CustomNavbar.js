import '../Styles/CustomNavbar.css'
import styled from 'styled-components'
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBNavbarItem,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

const NavbarBackground = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
`;

const Logo = styled.a`
  color : black;
  padding-top: 15px;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 2.3em;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

const MenuItem = styled.a`
  color : black;
  padding-top: 15px;
  padding-left: 15px;
  font-size: 1.5em;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

function CustomNavbar() {
  return (
    <NavbarBackground>
      <Logo href="#Welcome">Chocolate Insights</Logo>
      <MenuItem href="#Who">Who</MenuItem>
      <MenuItem href="#What">What</MenuItem>
      <MenuItem href="#Why">Why</MenuItem>
      <MenuItem href="#How">How</MenuItem>
      {/* <MDBNavbarItem>
        <MDBDropdown>
          <MDBDropdownToggle tag='a' className='nav-link'>
            Dropdown
          </MDBDropdownToggle>
          <MDBDropdownMenu>
            <MDBDropdownItem>
              <MDBDropdownLink>Action</MDBDropdownLink>
            </MDBDropdownItem>
            <MDBDropdownItem>
              <MDBDropdownLink>Another action</MDBDropdownLink>
            </MDBDropdownItem>
            <MDBDropdownItem>
              <MDBDropdownLink>Something else here</MDBDropdownLink>
            </MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
      </MDBNavbarItem> */}
    </NavbarBackground>
  );
}

export default CustomNavbar;