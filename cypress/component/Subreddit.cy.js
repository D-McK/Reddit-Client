import { Subreddit } from "../../src/components/Subreddit";
import { setupStore } from "../../src/store/Store";

describe("Subreddit.cy.js", () => {
  const store = setupStore();
  beforeEach(() => {
    window.store = store;
    cy.intercept({
      method: "GET",
      url: "https://www.reddit.com/r/astronomy.json",
    }).as("frontPage");
  });
  it("Shows the front page", () => {
    cy.mount(<Subreddit />, { reduxStore: store });
    cy.wait("@frontPage", { timeout: 15000 })
      .its("response.statusCode")
      .should("equal", 200);

    cy.get(".post").should("be.visible");
    cy.window()
      .its("store")
      .invoke("getState")
      .its("subreddit")
      .its("posts")
      .should("have.length", 26);
  });
});
