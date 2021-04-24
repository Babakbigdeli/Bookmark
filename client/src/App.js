import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import UserPage from "../src/pages/UserPage";

import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/userpage" component={UserPage} />
          <Route exact path="/auth0" component={useAuth0} />
        </div>
      </Router>
    </div>
  );
}

export default App;
