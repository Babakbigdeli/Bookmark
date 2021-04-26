import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import SearchResultCard from "../components/SearchResultCard";
import NewsFeed from "../components/NewsFeed";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { Grid } from "semantic-ui-react";
import { useAuth0 } from "@auth0/auth0-react";
import API from "../utils/API";

function Home() {
  const [subKey, setSubKey] = useState("");
  const [books, setBooks] = useState([]);
  const [q, setQ] = useState("");
/*
  const { user } = useAuth0();
  useEffect(() => {
    setSubKey(user.sub);
  }, [user.sub]);
*/
  const getBooks = () => {
    API.findBooks(q).then((response) => {
      console.log(response)
      setBooks(response.data.docs);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getBooks();
  };

  const handleChange = (e) => {
    setQ(e.target.value);
  };




  return (
    <div>
      <div>
        <Navbar />
       <Searchbar q={q} handleChange={handleChange} handleSubmit={handleSubmit} />
      </div>
      <div>
        <ul>
       
        </ul>
      </div>
    </div>
  );
}

/*
    //return (
     // console.log(user),
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
        <Footer/>
      </>
    );
  
  }

*/
export default Home;
