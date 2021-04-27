import React from "react";
import { Button, Card, Image } from "semantic-ui-react";

const SearchResultCard = ({key, cover_id, title, Button}) => (
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
        <div className="ui two buttons">
          <Button />
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          //src='/images/avatar/large/molly.png'
        />
        <Card.Header>search result 2</Card.Header>
        <Card.Meta>author</Card.Meta>
        <Card.Description>
          book description
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green">
            add to list
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          //src='/images/avatar/large/jenny.jpg'
        />
        <Card.Header>search result 3</Card.Header>
        <Card.Meta>author</Card.Meta>
        <Card.Description>book description</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green">
            add to list
          </Button>
        </div>
      </Card.Content>
    </Card>
  </Card.Group>
);

export default SearchResultCard;
