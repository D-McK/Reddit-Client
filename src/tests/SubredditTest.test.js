import React from "react";
import { Subreddit } from "../components/Subreddit";

import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { setupStore } from "../store/Store";
import { act } from "react-dom/test-utils";

const store = setupStore();

describe("<Subreddit/>", () => {
  test("renders front page on open", async () => {
    const { frontPage } = await act(async () =>
      render(
        <Provider store={store}>
          <Subreddit />
        </Provider>
      )
    );
    expect(frontPage).toMatchSnapshot();
  });
  test("should default render the 'all' page", () => {
    const subreddit = store.getState().subreddit;
    expect(subreddit.subreddit).toBe("all");
  });
});
