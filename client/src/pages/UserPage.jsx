import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ActivityFeed from "../components/ActivityFeed";
import History from "../components/HistoryAccordion";
import Currently from "../components/CurrentlyAccordion";
import Want from "../components/WantToReadAccordion";
import API from "../utils/API";

import { Segment, Grid } from "semantic-ui-react";

const UserPage = ({ email }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [books, setBooks] = useState([]);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    setActiveIndex({ activeIndex: newIndex });
  };

  // useEffect(() => {
  //   API.getBooks(email).then((usersBooks) => {
  //     setBooks(usersBooks);
  //   });
  // }, []);

  return (
    <>
      <Navbar />
      <Segment>
        <Grid columns={4} relaxed="very">
          <Grid.Column>
            <Currently
              books={books.filter(({ status }) => status === "present")}
            />
          </Grid.Column>
          <Grid.Column>
            <History books={books.filter(({ status }) => status === "past")} />
          </Grid.Column>
          <Grid.Column>
            <Want books={books.filter(({ status }) => status === "future")} />
          </Grid.Column>
          <Grid.Column>
            <ActivityFeed />
          </Grid.Column>
        </Grid>
      </Segment>
    </>
  );
};

export default UserPage;
