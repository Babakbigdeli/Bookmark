import React from "react";
import {Feed} from "semantic-ui-react";

function ActivityFeed() {
  return (
    <Feed>
    <Feed.Event
      icon='pencil'
      date='Today'
      summary="You added The Girl On The Train to History."
    />

    <Feed.Event>
      <Feed.Label icon='pencil' />
      <Feed.Content
        date='Today'
        summary="You added Harry Potter to your Want to Read."
      />
    </Feed.Event>
  </Feed>
  )
}

export default ActivityFeed;