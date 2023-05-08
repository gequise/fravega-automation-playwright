import { Locator, Page } from "@playwright/test";
import locators from "../locators/ProductDetailPage.json";

export class ProductDetailPage {
  readonly page: Page;
  readonly closeModalBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.closeModalBtn = page.locator(locators.closeModalButton);
  }

  async urlProductDetailPage() {
    await this.page.goto("/p/heladera-ciclica-drean-277lts-hdr280f00b-blanco-160879/");
  }

  async getRecordsRequest() {
    await this.page.route(
      "https://tracker-server-vryw2ld45a-uk.a.run.app/records",
      (route) => {
        if (route.request().method() === "POST") {
          console.log(`Intercepted POST request to DetailView${route.request().url()}`);
          console.log(`Request body to DetailView: ${route.request().postData()}`);
        }
        route.continue();
      }
    );
  }

  async clickCloseModal() {
    await this.closeModalBtn.click()
  }
}
