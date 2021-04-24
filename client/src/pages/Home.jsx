import React, { Component } from "react";
import Navbar from "../components/Navbar";
import ListButton from "../components/ListButton";
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import Searchbar from "../components/Searchbar";
import SearchResultCard from "../components/SearchResultCard";
import NewsFeed from "../components/NewsFeed";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Profile from "../components/Profile";
import "../style.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home">
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

export default Home;
