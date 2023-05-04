import { test, expect } from "@playwright/test";
import { AccountPage } from "../pages/myaccount-page";

test.describe("Login tests", () => {
  let accountPage: AccountPage;

  test.beforeEach(async ({ page }) => {
    accountPage = new AccountPage(page);

    await accountPage.urlAccountPage();
  });

  test("1. Login.", async () => {
    await accountPage.clickMyDataOption();
  });
});
