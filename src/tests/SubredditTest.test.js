import React from "react";
import { Subreddit } from "../components/Subreddit";
import { mockData } from "./mock/mockData";

import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { setupStore } from "../store/Store";
import { act } from "react-dom/test-utils";
import {
  changeSearch,
  changeSubreddit,
  loadedPosts,
} from "../store/subredditSlice";

const store = setupStore({
  subreddit: { posts: mockData, subreddit: "all", status: "succeeded" },
});

describe("<Subreddit/>", () => {
  test("renders front page on open", async () => {
    const { container } = await act(async () =>
      render(
        <Provider store={store}>
          <Subreddit />
        </Provider>
      )
    );
    console.log(store.getState());
    console.log(container);
    await expect(container).toMatchSnapshot();
  });
  test("should default render the 'all' page", () => {
    const subreddit = store.getState().subreddit;
    expect(subreddit.subreddit).toBe("all");
  });

  test("reducer action should change subreddit", () => {
    store.dispatch(changeSubreddit("testing"));
    const subreddit = store.getState().subreddit;
    expect(subreddit.subreddit).toBe("testing");
  });

  test("reducer action should add search value to store", () => {
    store.dispatch(changeSearch("testing search"));
    const subreddit = store.getState().subreddit;
    expect(subreddit.typedsubreddit).toBe("testing search");
  });

  test("reducer action should use typed value if value not given in params", () => {
    store.dispatch(changeSearch("typed"));
    store.dispatch(changeSubreddit());
    const subreddit = store.getState().subreddit;
    expect(subreddit.subreddit).toBe("typed");
  });
  test("reducer action should update posts stored in state", () => {
    store.dispatch(loadedPosts(mockData[0]));
    const subreddit = store.getState().subreddit;
    expect(subreddit.posts.at(-1)).toBe(mockData[0]);
  });
});
