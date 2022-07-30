import "./App.css";
import { Subreddit } from "./components/Subreddit";
import Store from "./store/Store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Subreddit />
      </div>
    </Provider>
  );
}

export default App;
