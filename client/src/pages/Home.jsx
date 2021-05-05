import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import SearchResultCard from "../components/SearchResultCard";
import NewsFeed from "../components/NewsFeed";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { Grid } from "semantic-ui-react";
import { useAuth0 } from "@auth0/auth0-react";
import API from "../utils/API";
import "./style/Home.css";
import SearchResultCardLoggedOut from "../components/SearchResultCardLoggedOut";

function Home() {
  const [books, setBooks] = useState([]);
  const [q, setQ] = useState("");
  const { user } = useAuth0();

  const getBooks = () => {
    API.findBooks(q).then((response) => {
      console.log(user);
      console.log(response.data);
      setBooks(response.data.splice(0, 5));
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getBooks();
  };

  const handleChange = (e) => {
    setQ(e.target.value);
  };

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
      subKey: user.sub,
      status: status,
      image: book.volumeInfo.imageLinks.thumbnail,
    })
      .then(() => getBooks())
      .catch((err) => {
        throw new Error(err);
      });
  };
  if (user !== undefined) {
    return (
      <>
        <div className="body">
          <Navbar />
          <Grid divided="vertically">
            <Grid.Row columns={1}>
              <Grid.Column>
                <hr></hr>
                <Banner />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column>
                <hr></hr>
                <hr></hr>
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
                        image={book.volumeInfo.imageLinks.thumbnail}
                        number_of_pages={book.volumeInfo.pageCount}
                        language={book.volumeInfo.language}
                        FutureButton={() => (
                          <button
                            className="wantButton"
                            value="future"
                            onClick={(event) =>
                              saveBookToDB(event.target.value, book.id)
                            }
                          >
                            Save to Want to Read
                          </button>
                        )}
                        PresentButton={() => (
                          <button
                            className="currentlyButton"
                            value="present"
                            onClick={(event) =>
                              saveBookToDB(event.target.value, book.id)
                            }
                          >
                            Save to Currently Reading
                          </button>
                        )}
                        PastButton={() => (
                          <button
                            className="historyButton"
                            value="past"
                            onClick={(event) =>
                              saveBookToDB(event.target.value, book.id)
                            }
                          >
                            Save to History
                          </button>
                        )}
                      />
                    ))
                  ) : (
                    <div className="bookfindsent">
                      <p>FIND YOUR BOOK & BEGIN YOUR BOOKMARKING JOURNEY</p>
                    </div>
                  )}
                </ul>
              </Grid.Column>
              <Grid.Column>
                <NewsFeed />
              </Grid.Column>
            </Grid.Row>
            <Footer />
          </Grid>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="body">
          <Navbar />
          <h1>Please sign up and/or login in order to save the books!</h1>
          <Grid divided="vertically">
            <Grid.Row columns={1}>
              <Grid.Column>
                <hr></hr>
                <Banner />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column>
                <hr></hr>
                <hr></hr>
                <Searchbar
                  q={q}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                />
                <ul>
                  {books.length ? (
                    books.map((book) => (
                      <SearchResultCardLoggedOut
                        id={book.id}
                        title={book.volumeInfo.title}
                        authors={book.volumeInfo.authors.join(", ")}
                        image={book.volumeInfo.imageLinks.thumbnail}
                        number_of_pages={book.volumeInfo.pageCount}
                        language={book.volumeInfo.language}
                      />
                    ))
                  ) : (
                    <div className="bookfindsent">
                      <p>FIND YOUR BOOK & BEGIN YOUR BOOKMARKING JOURNEY</p>
                    </div>
                  )}
                </ul>
              </Grid.Column>
              <Grid.Column>
                <NewsFeed />
              </Grid.Column>
            </Grid.Row>
            <Footer />
          </Grid>
        </div>
      </>
    );
  }
}

export default Home;
