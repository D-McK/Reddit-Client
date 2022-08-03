import "./App.css";
import { Subreddit } from "./components/Subreddit";
import Store from "./store/Store";
import { Provider } from "react-redux";
import { SubredditSearch } from "./components/SubredditSearch";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Provider store={Store}>
      <Router>
        <div className="App">
          <SubredditSearch />
          <Subreddit />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
