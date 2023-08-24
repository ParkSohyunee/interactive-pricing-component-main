"use strict";

const INITIAL_RANGE = 3;
const INITIAL_VALUE = "100K";
const INITIAL_PRICE = "16.00";

const valueObj = {
  1: "10K",
  2: "50K",
  3: "100K",
  4: "500K",
  5: "1M",
};

const priceObj = {
  1: 8,
  2: 12,
  3: 16,
  4: 24,
  5: 36,
};

/** 토글 */
const toggleBtn = document.querySelector(".toggleBtn");
let isYearlyBilling = false;
let range = INITIAL_RANGE;

const handleToggle = () => {
  toggleBtn.classList.toggle("active");
  isYearlyBilling = toggleBtn.classList.contains("active") ? true : false;
  calPrice();
};

toggleBtn.addEventListener("click", handleToggle);

/** 범위에 따른 view */
const value = document.getElementById("value");
const price = document.getElementById("price");
const pageRange = document.getElementById("pageRange");

value.innerHTML = INITIAL_VALUE;
price.innerHTML = INITIAL_PRICE;

pageRange.addEventListener("input", (e) => {
  range = e.target.value;
  calPrice();
  changeColorGradient();
});

const calPrice = () => {
  let discountPercentage = isYearlyBilling ? 0.75 : 1;
  value.innerText = valueObj[range];
  price.innerText = priceObj[range] * discountPercentage + ".00";
};

const changeColorGradient = () => {
  const gradientPercentage = (range - 1) * 25;
  pageRange.style.background = `linear-gradient(to right, var(--color-primary) 0% ${gradientPercentage}%, var(--color-light-grayish-blue) ${gradientPercentage}% 100%)`;
};
