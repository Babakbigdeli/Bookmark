import React, { Component } from "react";
import Navbar from "./Navbar";
import ListButton from "./ListButton";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Searchbar from "./Searchbar";
import SearchResultCard from "./SearchResultCard";
import NewsFeed from "./NewsFeed";
import Banner from "./Banner";
import Footer from "./Footer";
import Profile from "./Profile";
import "../style.css";

class Wrapper extends Component {
  state = {};
  render() {
    return (
      <div className="wrapper">
        <Navbar />
        <ListButton />
        <LoginButton />
        <LogoutButton />
        <Profile />
        <Searchbar />
        <SearchResultCard />
        <NewsFeed />
        <Banner />
        <Footer />
      </div>
    );
  }
}

export default Wrapper;
