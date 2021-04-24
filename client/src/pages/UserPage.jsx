import React, { Component } from "react";
import Navbar from "../components/Navbar";
import LogoutButton from "../components/LogoutButton";
;

class UserPage extends Component {
  state = {};
  render() {
    return (
      <>
        <Navbar />
      <LogoutButton />
    
      </>
    
     
    );
  }
}

export default UserPage;