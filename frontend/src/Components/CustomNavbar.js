import '../Styles/CustomNavbar.css'
import styled from 'styled-components'
import CustomDropdown from './CustomDropdown';

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

const dropdownItems = [
  {title:"Who", href:"Who"}, 
  {title:"What", href:"What"}, 
  {title:"Why", href:"Why"}, 
  {title:"How", href:"How"}
]

const CustomNavbar = () => {
  return (
    <NavbarBackground>
      <Logo href="#Welcome">Chocolate Insights</Logo>
      <MenuItem>
        <CustomDropdown dropdownTitle={"About"} dropdownItems={dropdownItems} />
      </MenuItem>
    </NavbarBackground>
  );
}

export default CustomNavbar;