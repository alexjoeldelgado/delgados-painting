const { test, expect } = require("@playwright/test");

test("client portal lookup with valid and invalid codes", async ({ page }) => {
  await page.goto("/clients");

  await expect(page.getByRole("heading", { name: /client portal/i })).toBeVisible();

  const input = page.getByLabel(/project code/i);

  await input.fill("BAD-CODE");
  await page.getByRole("button", { name: /check project/i }).click();
  await expect(
    page.getByText(/couldn’t find a project with that code/i),
  ).toBeVisible();

  await input.fill("SMITH-INT-0426");
  await page.getByRole("button", { name: /check project/i }).click();

  await expect(
    page.getByRole("heading", { name: /smith residence – interior repaint/i }),
  ).toBeVisible();
  await expect(page.getByText(/project code:\s*SMITH-INT-0426/i)).toBeVisible();
});

