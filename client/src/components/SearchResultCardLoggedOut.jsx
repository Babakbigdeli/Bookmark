import React from "react";
import {Card, Image } from "semantic-ui-react";

function SearchResultCardLoggedOut({
  key,
  image,
  title,
  authors,
  number_of_pages,
  language,
 
}) {
  return (
    <div>
      <hr></hr>
      <Card>
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Image floated="left" src={image} />
          <Card.Description>Author : {authors}</Card.Description>
          <Card.Description>
            Number Of Pages : {number_of_pages}
          </Card.Description>
          <Card.Description>Language : {language}</Card.Description>
        </Card.Content>
      
      </Card>
      <hr></hr>
    </div>
  );
}
export default SearchResultCardLoggedOut;