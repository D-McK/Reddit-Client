import { Subreddit } from "../../src/components/Subreddit";
import { setupStore } from "../../src/store/Store";

describe("SubredditPostComments.cy.js", () => {
  const store = setupStore();
  beforeEach(() => {
    window.store = store;
    cy.intercept({
      method: "GET",
      url: "https://www.reddit.com/r/astronomy.json",
    }).as("frontPage");
  });
  it("Shows a post comments", () => {
    cy.mount(<Subreddit />, { reduxStore: store });
    cy.contains("p", "Comments").first().click();

    cy.get(".comment-chain").should("be.visible");
  });
});
