import "./App.css";
import { Subreddit } from "./components/Subreddit";
import { store } from "./store/Store";
import { Provider } from "react-redux";
import { SubredditSearch } from "./components/SubredditSearch";
import { HeaderBar } from "./components/HeaderBar";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HeaderBar />
        <Subreddit />
        <SubredditSearch />
      </div>
    </Provider>
  );
}

export default App;
