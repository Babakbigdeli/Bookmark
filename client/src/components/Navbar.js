import {} from "react-router-dom";
import { RiBookMarkLine } from "react-icons/ri";
import React from "react";
import { Menu, Segment } from "semantic-ui-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";


function Navbar() {
  //state = { activeItem: 'home' }

  //handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  //const { activeItem } = this.state

  return (
    
      <Menu pointing secondary>
        <Segment position="down">
          Bookmark
          <RiBookMarkLine />
        </Segment>
        <Menu.Item
          name="home"
          //active={activeItem === 'home'}
          //onClick={this.handleItemClick}
        />
        <Menu.Item
          name="user page"
          //active={activeItem === 'user'}
          // onClick={this.handleItemClick}
        />

        <Menu.Menu position='right'>
          <LoginButton/>
          <LogoutButton/>
        </Menu.Menu>
      </Menu>
    
  );
}

export default Navbar;
