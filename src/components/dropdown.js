import React from 'react';
import styled, {css} from 'styled-components';
import { Link } from "gatsby";
import menuImage from "../images/menu(1).png"

const Wrapper = styled.div`
@media only screen and (max-width: 789px){
  display: none;
}
`;

const Menu = styled.div`
  padding: 1em;
  position: absolute;
  right: 30px;
  border-color: #fff;
  border-width: 1px;
  border-style: solid;
  border-radius: .5em;
`;

const Text = styled.h1`
  font-family: Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,sans-serif;
  font-weight: bold;
  font-size: 1em;
  color: black;
  font-weight: lighter;
  padding: 10% 0 10% 0;
  margin-left: auto;
  margin-top: auto;
  margin-bottom: auto;

`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    @media only screen and (min-width: 789px){

    }
`;
const Icon = styled.img`
  height: auto;
  width: auto;
`;
const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;
class Dropdown extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
        <Wrapper>
         <Icon src={menuImage} onClick={this.showDropdownMenu}/>

          { this.state.displayMenu ? (
            <Menu>
          <List>
         <li><Text><StyledLink target="blank" to='/'>Home</StyledLink></Text></li>
         <li><Text><StyledLink target="blank" to='/about'>About</StyledLink></Text></li>
         <li><Text><StyledLink target="blank" to='/milestones'>What I've Been Up To</StyledLink></Text></li>
         <li><Text><StyledLink target="blank" to='/portfolio'>Projects</StyledLink></Text></li>
          </List>
          </Menu>
        ):
        (
          null
        )
        }

       </Wrapper>

    );
  }
}

export default Dropdown;
