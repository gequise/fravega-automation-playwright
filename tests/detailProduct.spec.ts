import { test, expect } from "@playwright/test";
import { ProductDetailPage } from "../pages/productDetail-page";

test.describe("Detail Product tests", () => {
  let productDetailPage: ProductDetailPage;

  test.beforeEach(async ({ page }) => {
    productDetailPage = new ProductDetailPage(page);

    await productDetailPage.urlProductDetailPage();
  });

  test("1. Product Detail Page - Event DetailView.", async () => {
    await productDetailPage.clickCloseModal();
    await productDetailPage.getRecordsRequest();

  });
});
