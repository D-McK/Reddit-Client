import "./App.css";
import { Subreddit } from "./components/Subreddit";
import Store from "./store/Store";
import { Provider } from "react-redux";
import { SubredditSearch } from "./components/SubredditSearch";
import { PostComments } from "./components/PostComments";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Provider store={Store}>
      <Router>
        <div className="App">
          <SubredditSearch />
          <Routes>
            <Route path="/" element={<Subreddit />} />
            <Route path="/comments" element={<PostComments />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
