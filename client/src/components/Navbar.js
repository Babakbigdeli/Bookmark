import {} from 'react-router-dom';
import { RiBookMarkLine } from 'react-icons/ri';
import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import Login from './LoginButton';

export default class Navbar extends Component {
  //state = { activeItem: 'home' }

  //handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    //const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          < Segment position='down'>
          <RiBookMarkLine/>
          </ Segment >
          <Menu.Item
            name='home'
            //active={activeItem === 'home'}
            //onClick={this.handleItemClick}
          />
          <Menu.Item
            name='messages'
            //active={activeItem === 'user'}
           // onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='login'
              onClick={Login}
            />
          </Menu.Menu>
        </Menu>

       
      </div>
    )
  }
}

