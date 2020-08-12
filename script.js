"use strict";

const detailsCalculator = (
  triggerSelector,
  calculatorSelector,
  activeClass
) => {
  const trigger = document.querySelector(triggerSelector),
    calculator = document.querySelector(calculatorSelector);

  trigger.addEventListener("click", (e) => {
    e.preventDefault();
    calculator.classList.toggle(activeClass);
  });
};

detailsCalculator(
  ".show-details-calc",
  ".details-calc",
  "details-calc--active"
);

const buttonSettings = (addSelector, deleteSelector, row, ...parrentRow) => {
  const addBtn = document.querySelector(addSelector),
    delBtn = document.querySelector(deleteSelector),
    rows = document.querySelectorAll(row),
    parrent = document.querySelector(parrentRow);

  rows.forEach((el, i) => {});

  addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const element = document.createElement("input");

    element.classList.add(row.replace(/\./, ""));

    parrent.prepend(element);
  });
};

buttonSettings(
  ".add-row",
  ".delete-row",
  ".details-calc--input",
  ".normal-column",
  ".out-town-column",
  ".in-town-column",
  ".in-bigtown-column"
);
