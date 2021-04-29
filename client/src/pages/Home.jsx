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
  // const { user } = useAuth0();

  //  setSubKey(user.sub);

  const getBooks = () => {
    API.findBooks(q).then((response) => {
      console.log(response.data);
      setBooks(response.data);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getBooks();
  };

  const handleChange = (e) => {
    setQ(e.target.value);
  };
  const user = useAuth0();

  // const getUSerSubKey = () => {
  //   console.log(user);
  // }

  const saveBookToDB = (status, id) => {
    const book = books.find((book) => book.id === id);

    console.log(book);
    API.saveBook({
      id: book.id,
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      number_of_pages: book.volumeInfo.pageCount,
      language: book.volumeInfo.language,
      subKey: "test",
      status: status,
      image: book.volumeInfo.imageLinks.thumbnail,
    });
  };

  return (
    <>
      <Navbar />
      <Grid divided="vertically">
        <Grid.Row columns={2}>
          <Grid.Column>
            <Searchbar
              q={q}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
            <ul>
              {books.length ? (
                books.map((book) => (
                  <SearchResultCard
                    id={book.id}
                    title={book.volumeInfo.title}
                    authors={book.volumeInfo.authors.join(", ")}
                    description={book.volumeInfo.description}
                    number_of_pages={book.volumeInfo.pageCount}
                    language={book.volumeInfo.language}
                    PastButton={() => (
                      <button
                        value="past"
                        onClick={(event) =>
                          saveBookToDB(event.target.value, book.id)
                        }
                      >
                        Save to History
                      </button>
                    )}
                    PresentButton={() => (
                      <button
                        value="present"
                        onClick={(event) =>
                          saveBookToDB(event.target.value, book.id)
                        }
                      >
                        Save to Currently Reading
                      </button>
                    )}
                    FutureButton={() => (
                      <button
                        value="future"
                        onClick={(event) =>
                          saveBookToDB(event.target.value, book.id)
                        }
                      >
                        Save to Want to Read
                      </button>
                    )}
                  />
                ))
              ) : (
                <p>No books to display. Are you sure you have searched?</p>
              )}
            </ul>
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
