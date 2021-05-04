import React, { Component } from "react";
import { Container, Header, Accordion, Icon } from "semantic-ui-react";
import API from "../utils/API";

export default class WantToReadAccordion extends Component {
  constructor(props) {
    super(props);

    this.props = props;
  }
  state = { activeIndex: 0 };

  refreshPage = () => {
    window.location.reload();
  };

  handleDelete = (id) => {
    API.deleteBook(id).then(() => {
      this.refreshPage();
    });
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
        status: "present",
        image: book.image,
      },
      id
    ).then(() => this.refreshPage());
  };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <Container>
        <Header as="h4" color="purple">
          Want To Read
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
                  <Icon name="dropdown" color="purple" />
                  {book.title}
                </Accordion.Title>
                <Accordion.Content active={activeIndex === index}>
                  <p>Author(s): {book.authors}</p>
                  <p>Number Of Pages: {book.number_of_pages}</p>
                  <button
                    class="ui secondary button"
                    onClick={() => this.handleUpdate(book._id)}
                  >
                    Send to Currently
                  </button>
                  <button
                    class="ui secondary button"
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
