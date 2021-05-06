import React, { Component } from "react";
import { Container, Header, Accordion, Icon } from "semantic-ui-react";
import API from "../utils/API";

export default class CurrentlyAccordion extends Component {
  constructor(props) {
    super(props);

    this.props = props;
  }
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  handleUpdate = (id) => {
    const book = this.props.books.find((book) => book._id === id);
    console.log(book);
    console.log(id);
    API.updateBook(
      {
        id: book.id,
        title: book.title,
        authors: book.authors,
        description: book.description,
        number_of_pages: book.number_of_pages,
        language: book.language,
        subKey: book.subKey,
        status: "past",
        image: book.image,
      },
      id
    ).then(() => {
      this.props.updateBookStatus(id);

      // Update parents state to communicate the book has moved column
    });
  };

  handleDelete = (id) => {
    API.deleteBook(id).then(() => {
      this.props.deleteBook(id);
    });
  };
  render() {
    const { activeIndex } = this.state;

    return (
      <Container>
        <Header as="h4" color="red">
          Currently
        </Header>
        <Accordion fluid styled>
          {this.props.books.map((book, index) => {
            return (
              <>
                <Accordion.Title
                  active={activeIndex === index}
                  index={index}
                  onClick={this.handleClick}
                >
                  <Icon name="dropdown" color="red" />
                  {book.title}
                </Accordion.Title>
                <Accordion.Content active={activeIndex === index}>
                  <p>Author: {book.authors}</p>
                  <p>Number Of Pages: {book.number_of_pages}</p>
                  <button
                    class="updatetohistory"
                    onClick={() => this.handleUpdate(book._id)}
                  >
                    Send to History
                  </button>
                  <button
                    class="deletebutton"
                    onClick={() => this.handleDelete(book._id)}
                  >
                    Delete
                  </button>
                </Accordion.Content>
              </>
            );
          })}
        </Accordion>
      </Container>
    );
  }
}
