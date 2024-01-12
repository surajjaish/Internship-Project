document.addEventListener("DOMContentLoaded", function () {
  const billingToggle = document.getElementById("billing-toggle");
  const prices = document.querySelectorAll(".price");

  billingToggle.addEventListener("change", function () {
    prices.forEach((price) => {
      const monthlyPrice = price.getAttribute("data-monthly");
      const yearlyPrice = price.getAttribute("data-yearly");
      price.textContent = billingToggle.checked
        ? `Yearly: ${yearlyPrice}`
        : `Monthly: ${monthlyPrice}`;
    });
  });
});
