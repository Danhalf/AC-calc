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

  const buttonSettings = (addSelector, parrentRow) => {
    const addBtn = document.querySelector(addSelector),
      parrent = document.querySelectorAll(parrentRow);
    let barrier = 0;
    addBtn.addEventListener("click", (e) => {
      if (barrier < 4) {
        barrier++;
        parrent.forEach((el) => {
          const element = el.cloneNode(true);
          el.appendChild(element);
        });
      }
    });
  };

  const changedInputs = (
    norm,
    out,
    town,
    bigtown,
    inNorm,
    inOut,
    inTown,
    inBigtown
  ) => {
    const n = document.querySelector(norm),
      o = document.querySelector(out),
      t = document.querySelector(town),
      b = document.querySelector(bigtown),
      iN = document.querySelectorAll(inNorm),
      iO = document.querySelectorAll(inOut),
      iT = document.querySelectorAll(inTown),
      iB = document.querySelectorAll(inBigtown);

    iN.forEach((e) => {
      e.addEventListener("change", () => {
        n.value += e.value;
      });
    });
  };

  changedInputs(
    ".normal",
    ".out-town",
    ".in-town",
    ".in-bigtown",
    ".input-normal",
    ".input-out-town",
    ".input-input-in-town",
    ".input-in-bigtown"
  );

  buttonSettings(".add-row", ".details-calc-column");
};

detailsCalculator(
  ".show-details-calc",
  ".details-calc",
  "details-calc--active"
);
