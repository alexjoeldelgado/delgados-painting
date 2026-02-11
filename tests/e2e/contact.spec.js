const { test, expect } = require("@playwright/test");

test("contact page shows phone, email, and form fields", async ({ page }) => {
  await page.goto("/contact");

  await expect(page.getByRole("heading", { name: /contact/i })).toBeVisible();

  await expect(page.getByText("(407) 947-8912")).toBeVisible();
  await expect(page.getByText("info@delgadospainting.com")).toBeVisible();

  await expect(page.getByLabel(/name/i)).toBeVisible();
  await expect(page.getByLabel(/email/i)).toBeVisible();
  await expect(page.getByLabel(/phone/i)).toBeVisible();
  await expect(page.getByLabel(/project address/i)).toBeVisible();
  await expect(page.getByLabel(/project details/i)).toBeVisible();

  await expect(page.getByRole("button", { name: /send message/i })).toBeVisible();
});

