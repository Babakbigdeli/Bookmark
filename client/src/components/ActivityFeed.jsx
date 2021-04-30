import React, { state, componentDidMount} from "react";
import { Feed } from "semantic-ui-react";
import API from "../utils/API";

// state = {
//   books: [],
// };

// componentDidMount = () => {
//   this.getBooks();
// };

// const bookActivity = () => {
//   API.getBooks.then((response) => {
//     console.log(response.data);
//   });
// };

function ActivityFeed() {
  return (
    <Feed>
      <Feed.Event
        icon="pencil"
        date="Today"
        summary="You added The Girl On The Train to History."
      />
      {/* <div>{bookActivity()}</div> */}
      <Feed.Event>
        <Feed.Label icon="pencil" />
        <Feed.Content
          date="Today"
          summary="You added Harry Potter to your Want to Read."
        />
      </Feed.Event>
    </Feed>
  );
}

export default ActivityFeed;
