import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ActivityFeed from "../components/ActivityFeed";
import History from "../components/HistoryAccordion";
import Currently from "../components/CurrentlyAccordion";
import Want from "../components/WantToReadAccordion";
import API from "../utils/API";
import { useAuth0 } from "@auth0/auth0-react";
import "./style/UserPage.css";
import Footer from "../components/Footer";

import { Segment, Grid } from "semantic-ui-react";

const UserPage = ({ email }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth0();

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;
    setActiveIndex({ activeIndex: newIndex });
  };

  useEffect(() => {
    API.getBooks().then((usersBooks) => {
      console.log(usersBooks);
      let filteredBooks = [];
      if (user !== undefined) {
        filteredBooks = usersBooks.data.filter(
          (userbook) => userbook.subKey === user.sub
        );
      }
      console.log(filteredBooks);
      setBooks(filteredBooks);
      setLoading(false);
    });
  }, [setBooks]);

  if (user === undefined) {
    return (
      <>
        <Navbar />
        <h1>No user found, please sign up and/or login</h1>
      </>
    );
  } else if (!loading) {
    return (
      <>
        <Navbar />
        <Segment>
          <Grid columns={4} relaxed="very">
            <Grid.Column>
              <Want books={books.filter(({ status }) => status === "future")} />
            </Grid.Column>
            <Grid.Column>
              <Currently
                books={books.filter(({ status }) => status === "present")}
              />
            </Grid.Column>
            <Grid.Column>
              <History
                books={books.filter(({ status }) => status === "past")}
              />
            </Grid.Column>
            <Grid.Column>
              <ActivityFeed />
            </Grid.Column>
            <Footer />
          </Grid>
        </Segment>
      </>
    );
  } else {
    return (
      <>
        <h3>Loading...</h3>
      </>
    );
  }
};

export default UserPage;
