import React from "react";
import { Button, Card, Image } from "semantic-ui-react";

const SearchResultCard = ({ key, cover_id, title }) => (
  <div className="searchResultCard">
    <Card.Group>
      <Card>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            //src='/images/avatar/large/steve.jpg'
          />
          <Card.Header>{title}</Card.Header>
          <Card.Meta>author</Card.Meta>
          <Card.Description>book info</Card.Description>
        </Card.Content>
        <Card.Content extra>
          {/* <Button /> <Button /> <Button /> */}
        </Card.Content>
      </Card>
    </Card.Group>
  </div>
);

export default SearchResultCard;
