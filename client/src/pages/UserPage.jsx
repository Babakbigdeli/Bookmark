import React, { Component } from "react";
import Navbar from "../components/Navbar";
import ActivityFeed from "../components/ActivityFeed";
import History from "../components/HistoryAccordion";
import Currently from "../components/CurrentlyAccordion";
import Want from "../components/WantToReadAccordion";

import {
  Segment,
  Grid,
} from "semantic-ui-react";

export default class UserPage extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    

    return (
      <>
        <Navbar />
        <Segment>
          <Grid columns={4} relaxed="very">
            <Grid.Column>
              <Currently/>
            </Grid.Column>
            <Grid.Column>
              <History/>
            </Grid.Column>
            <Grid.Column>
              <Want/>
            </Grid.Column>
            <Grid.Column>
              <ActivityFeed/>
            </Grid.Column>
          </Grid>
        </Segment>
      </>
    );
  }
}
