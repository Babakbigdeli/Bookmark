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

const UserPage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth0();

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
  }, []);

  const updateBookStatus = (bookId, targetStatus) => {
    const bookIndex = books.findIndex(({ _id }) => _id === bookId);

    const [book] = books.splice(bookIndex, 1);

    const updatedBook = { ...book, status: targetStatus };

    setBooks([...books, updatedBook]);
  };

  const deleteBook = (bookId) => {
    const bookIndex = books.findIndex(({ _id }) => _id === bookId);

    books.splice(bookIndex, 1);

    setBooks([...books]);
  };

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
              <Want
                books={books.filter(({ status }) => status === "future")}
                updateBookStatus={(bookId) =>
                  updateBookStatus(bookId, "present")
                }
                deleteBook={deleteBook}
              />
            </Grid.Column>
            <Grid.Column>
              <Currently
                books={books.filter(({ status }) => status === "present")}
                updateBookStatus={(bookId) => updateBookStatus(bookId, "past")}
                deleteBook={deleteBook}
              />
            </Grid.Column>
            <Grid.Column>
              <History
                books={books.filter(({ status }) => status === "past")}
                deleteBook={deleteBook}
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
