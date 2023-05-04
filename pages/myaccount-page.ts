import { Locator, Page } from "@playwright/test";
import locators from "../locators/myAccountPage.json";

export class AccountPage {
  readonly page: Page;
  readonly myDataOpt: Locator;

  constructor(page: Page) {
    this.page = page;
    this.myDataOpt = page.locator(locators.myDataOption);
  }

  async urlAccountPage() {
    await this.page.goto("/mi-cuenta");
  }

  async clickMyDataOption() {
    return await this.myDataOpt.click();
  }
}
