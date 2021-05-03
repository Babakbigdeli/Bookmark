import React, { Component } from "react";
import { Container, Header, Accordion, Icon } from "semantic-ui-react";
import API from "../utils/API";

export default class HistoryAccordion extends Component {
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
        <Header as="h4" color="olive">
          History
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
                  <Icon name="dropdown" color="olive" />
                  {book.title}
                </Accordion.Title>
                <Accordion.Content active={activeIndex === index}>
                  <p>{book.authors}</p>
                  <p>{book.number_of_pages}</p>
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
