import React, { Component } from "react";
import { Container, Header, Accordion, Icon } from "semantic-ui-react";

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
                <Accordion.Content active={activeIndex === 0}>
                  <p>{book.authors}</p>
                  <p>{book.number_of_pages}</p>
                </Accordion.Content>
              </>
            );
          })}
        </Accordion>
      </Container>
    );
  }
}
