const { test, expect } = require("@playwright/test");

test("home page shows Delgado's Painting Inc and key sections", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toContainText("Orlando metro commercial & residential painting");

  await expect(page.getByRole("link", { name: /about/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /projects/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /gallery/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /client portal/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /contact/i })).toBeVisible();
});

