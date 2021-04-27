import React from "react";
import {  Grid } from "semantic-ui-react";

function Searchbar({q, handleChange, handleSubmit}) {
  return (
    <Grid>
      <Grid.Column width={6}>
      <form>
          <input type="text" value={q} onChange={handleChange} />
          <button onClick={handleSubmit} type="submit">Search</button>
        </form>
      </Grid.Column>
    </Grid>
  );
}

export default Searchbar;
