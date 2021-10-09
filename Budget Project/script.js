const buttonNext = document.querySelector("#buttonNext");
const budget = document.querySelector("#budget");
const addExpense = document.querySelector("#expenseBtn");

let salary = 0;
buttonNext.addEventListener("click", () => {
  if (budget.value < 0 || budget.value === "") return;
  salary = budget.value;
});
console.log(salary);

addExpense.addEventListener("click", () => console.log(salary));
