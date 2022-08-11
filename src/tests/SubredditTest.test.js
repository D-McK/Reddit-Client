import { render, fireEvent, screen } from "@testing-library/react";
import { Subreddit } from "../components/Subreddit";
import { setupStore } from "../store/Store";
import { fetchSubreddit } from "../store/subredditSlice";
import { renderWithProviders } from "../utils/testutils";

test("should render all page at start", () => {
  const store = setupStore();

  store.dispatch(fetchSubreddit("all"));
  const subreddit = store.getState().subreddit;
  expect(subreddit.subreddit).toBe("all");
});
