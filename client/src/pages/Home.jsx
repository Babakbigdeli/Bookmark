import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import SearchResultCard from "../components/SearchResultCard";
import NewsFeed from "../components/NewsFeed";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import {Grid} from "semantic-ui-react";
import {useAuth0} from '@auth0/auth0-react'

function Home()  {
  const [subKey, setSubKey] = useState('');
  const {user} = useAuth0();
  useEffect(() => {
    setSubKey(user.sub)}, [user.sub]
  )
  
    return (
      console.log(user),
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


export default Home;
