import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import SearchResultCard from "../components/SearchResultCard";
import NewsFeed from "../components/NewsFeed";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import {Grid, Column} from "semantic-ui-react";

class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <Navbar />
        <Grid divided="vertically">
          <Grid.Row columns={2}>
            <Grid.Column>
              <Searchbar />
              <SearchResultCard />
            </Grid.Column>
            <Grid.Column>
              <NewsFeed />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={1}>
            <Grid.Column>
              <Banner />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Footer />
      </>
    );
  }
}

<Footer />;

export default Home;
