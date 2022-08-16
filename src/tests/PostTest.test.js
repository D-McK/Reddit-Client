import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { setupStore } from "../store/Store";
import { act } from "react-dom/test-utils";
import { mockData } from "./mock/mockData";
import { Subreddit } from "../components/Subreddit";

const store = setupStore({
  subreddit: { posts: mockData, subreddit: "all", status: "succeeded" },
});

describe("<PostComments/>", () => {
  test("Clicking comments opens the comments section", async () => {
    const { container, getByTestId } = await act(async () =>
      render(
        <Provider store={store}>
          <Subreddit />
        </Provider>
      )
    );
    console.log(store.getState().subreddit.status);
    const comments = getByTestId("comments");
    console.log(comments);
  });
});
