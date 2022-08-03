import "./App.css";
import { Subreddit } from "./components/Subreddit";
import Store from "./store/Store";
import { Provider } from "react-redux";
import { SubredditSearch } from "./components/SubredditSearch";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <SubredditSearch />
        <Subreddit />
      </div>
    </Provider>
  );
}

export default App;
