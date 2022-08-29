import "./App.css";
import { Subreddit } from "./components/Subreddit";
import { store } from "./store/Store";
import { Provider } from "react-redux";
import { SubredditSearch } from "./components/SubredditSearch";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SubredditSearch />
        <Subreddit />
      </div>
    </Provider>
  );
}

export default App;
