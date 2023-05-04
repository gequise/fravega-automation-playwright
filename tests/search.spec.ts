import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/home-page";

test.describe("Search tests", () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);

    await homePage.urlHomePage();
  });

  test("1. search.", async () => {
    await homePage.fillSearchInp();
    const title = await homePage.getTitle();
    console.log("ASSERT", title);
  });
});
