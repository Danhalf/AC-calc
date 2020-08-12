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

  const changedInputs = () => {
    const normal = document.querySelector(".normal"),
      outTown = document.querySelector(".out-town"),
      inTown = document.querySelector(".in-town"),
      inBigTown = document.querySelector(".in-bigtown"),
      inputsNormal = document.querySelectorAll(".input-normal"),
      inputsOutTown = document.querySelectorAll(".input-out-town"),
      inputsInTown = document.querySelectorAll(".input-input-in-town"),
      inputsInBigTown = document.querySelectorAll(".input-in-bigtown");

    let arrNormal = [],
      arrOutTown = [],
      arrInTown = [],
      arrInBigTown = []; // Массив, куда запишутся все значения инпутов

    function sumInputs(inp, arrInp) {
      for (let i = 0; i < inp.length; i++) {
        arrInp.push(inp[i].value); // (*1)

        inp[i].addEventListener("input", function () {
          arrInp[i] = this.value;
          // При вводе чисел в любом инпуте, не будем пересобирать все значения,
          // а только изменим конкретный элемент массива.
          // this - указывает на инпут, в котором печатают (который запускает эту функцию)

          // Все значения в массиве обновлены, можно обновить и результаты:
          normalResults();
        });
      }
    }

    sumInputs(inputsNormal, arrNormal);

    normalResults();

    /************/

    function normalResults() {
      normal.value = sumArr(arrNormal);
    }

    function sumArr(arr) {
      let x = 0;
      for (let i = 0; i < arr.length; i++) {
        x += +arr[i]; // (*2)
      }
      return x;
    }
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
};

detailsCalculator(
  ".show-details-calc",
  ".details-calc",
  "details-calc--active"
);
