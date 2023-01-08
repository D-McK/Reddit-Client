import App from "../../src/App";
import { setupStore } from "../../src/store/Store";

describe("SubredditPostComments.cy.js", () => {
  const store = setupStore();
  beforeEach(() => {
    window.store = store;
    cy.viewport(1350, 750);
    cy.mount(<App />, { reduxStore: store });
    cy.get("input.search-box").clear().trigger("change");
  });
  it("Shows the main app component", () => {
    cy.intercept({
      method: "GET",
      url: "https://www.reddit.com/r/astronomy.json",
    }).as("frontPage");
    cy.get(".App").should("be.visible");
  });
  it("Displays error page if subreddit is invalid", () => {
    cy.get("input.search-box").type("gawgwqgahjinu").trigger("change");
    cy.get("button.submit").click();
    cy.get(".not-found", { timeout: 25000 }).should("be.visible");
  });
  it("Can change the subreddit using search bar", () => {
    cy.get("input.search-box").type("dataisbeautiful").trigger("change");
    cy.get("button.submit").click();
    cy.get(".subreddit-from", { timeout: 25000 })
      .first()
      .should("have.text", "dataisbeautiful");
  });
  it("Does not change subreddit if search bar is empty", () => {
    cy.get("input.search-box").clear().trigger("change");
    cy.get("button.submit").click();
    cy.get(".subreddit-from", { timeout: 25000 })
      .first()
      .should("have.text", "dataisbeautiful");
  });
  it("Navigates through post comments", () => {
    cy.get(".comments").first().click();
    cy.get(".comment-chain").should("be.visible");
    cy.get(".comments").first().click();
    cy.get("comment-chain").should("not.exist");
    cy.get(".comments").first().click();
    cy.get(".comment-chain").should("be.visible");
    cy.get(".comments").last().click();
    cy.get("comment-chain").should("not.exist");
    cy.get(".comments").last().click();
    cy.get(".comment-chain").should("be.visible");
  });
});
