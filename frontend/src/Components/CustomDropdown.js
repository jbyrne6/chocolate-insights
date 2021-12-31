import '../Styles/CustomDropdown.css'
import styled from 'styled-components'
import { MDBIcon } from 'mdb-react-ui-kit';

const DropdownItem = styled.a`
  color : black;
  padding-top: 15px;
  padding-left: 15px;
  font-size: 0.8em;
  text-align: center;
  cursor: pointer;
  border-bottom: 3px solid black;
  &:hover {
    color: black;
  }
`;

const CustomDropdown = (props) => {
  return (
    <div class="dropdown">
      <button class="dropbtn">{props.dropdownTitle}</button>
      <div className="dropdown-content">
          {props.dropdownItems.map((dropdownItem, index) =>
          {
            const isLastElement = index === (props.dropdownItems.length - 1)
            return <DropdownItem style={ isLastElement ? {borderBottom: 'none'} : {borderBottom: '3px solid black'} } href={`#${dropdownItem.href}`} >{dropdownItem.title}</DropdownItem>
          }  
        )}
      </div>
      <MDBIcon fas icon="caret-down" />
    </div>
  );
}

export default CustomDropdown;