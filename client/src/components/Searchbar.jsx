import React from "react";
import { Search, Grid } from "semantic-ui-react";

function Searchbar() {
  return (
    <Grid>
      <Grid.Column width={6}>
        <Search />
      </Grid.Column>
    </Grid>
  );
}

export default Searchbar;
