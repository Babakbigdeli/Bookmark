import React, { Component } from "react";
import Navbar from "../components/Navbar";
import ListButton from "../components/ListButton";
import LogoutButton from "../components/LogoutButton";
import Searchbar from "../components/Searchbar";
import SearchResultCard from "../components/SearchResultCard";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Profile from "../components/Profile";
import "../style.css";

class UserPage extends Component {
  state = {};
  render() {
    return (
      <div className="userpage">
        <Navbar />
        <ListButton />
        <LogoutButton />
        <Profile />
        <Searchbar />
        <SearchResultCard />
        <Banner />
        <Footer />
      </div>
    );
  }
}

export default UserPage;