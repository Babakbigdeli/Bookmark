import React from "react";

import { useAuth0 } from "@auth0/auth0-react";

import Wrapper from "./components/Wrapper";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="App">
    <Wrapper>
    </Wrapper>
    </div>
  );
}

export default App;
