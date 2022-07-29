import "./App.css";
import { Subreddit } from "./components/Subreddit";
import { Store as store } from "./store/Store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Subreddit />
      </div>
    </Provider>
  );
}

export default App;
