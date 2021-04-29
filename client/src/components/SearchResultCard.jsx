import React from "react";
import { Button, Card, Image } from "semantic-ui-react";

function SearchResultCard({
  key,
  image,
  title,
  authors,
  description,
  number_of_pages,
  language,
  PastButton,
  PresentButton,
  FutureButton,
}) {
  return (
    <div>
      <Card>
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Image floated="left" src={image} />
          <Card.Description>Author : {authors}</Card.Description>
          <Card.Description>Description : {description}</Card.Description>
          <Card.Description>
            Number Of Pages : {number_of_pages}
          </Card.Description>
          <Card.Description>Language : {language}</Card.Description>
        </Card.Content>
        <Card.Content>
          <PastButton /> <PresentButton /> <FutureButton />
        </Card.Content>
      </Card>
    </div>
  );
}
export default SearchResultCard;
