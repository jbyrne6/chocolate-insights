import '../Styles/CustomNavbar.css'
import styled from 'styled-components'

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
      <MenuItem href="#About">About</MenuItem>
      {/* <MenuItem href="#Discovery_Map">Discovery Map</MenuItem> */}
    </NavbarBackground>
  );
}

export default CustomNavbar;