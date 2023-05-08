import { Locator, Page, request } from "@playwright/test";
import locators from "../locators/homePage.json";

export class HomePage {
  readonly page: Page;
  readonly myAccountOpt: Locator;
  readonly searchInp: Locator;
  readonly submitSearchBtn: Locator;
  readonly closeModalBtn: Locator;
  readonly resultTitleTxt: Locator;

  constructor(page: Page) {
    this.page = page;
    this.myAccountOpt = page.locator(locators.myAccountOption);
    this.searchInp = page.locator(locators.searchInput);
    this.submitSearchBtn = page.getByRole("group").getByRole("button");
    this.closeModalBtn = page.locator(locators.closeModalButton);
    this.resultTitleTxt = page.locator(locators.resultTitleText);
  }

  async urlHomePage() {
    await this.page.goto("/");
  }

  async getUserNameTxt() {
    return await this.myAccountOpt.click();
  }

  async fillSearchInp() {
    await this.searchInp.fill("test");
    await this.closeModalBtn.click();
    await this.submitSearchBtn.click();
    await this.page.waitForLoadState("domcontentloaded");
  }

  async getRecordsRequest() {
    await this.page.route(
      "https://tracker-server-vryw2ld45a-uk.a.run.app/records",
      (route) => {
        if (route.request().method() === "POST") {
          console.log(`Intercepted POST request to ${route.request().url()}`);
          console.log(`Request body: ${route.request().postData()}`);
        }
        route.continue();
      }
    );
  }

  async getTitle() {
    return await this.resultTitleTxt.textContent();
  }
}
