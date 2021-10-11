// Text input that holds the monthly income
const budget = document.querySelector("#budget");

// Button that moves to the next step, the expense list, that adds the budget to the budget and the balance element
const buttonNext = document.querySelector("#buttonNext");

// Button that adds the expense name and amount to list
const addExpense = document.querySelector("#expenseBtn");

// append item here
const list = document.querySelector("#list-input");

// Expense name
const expenseName = document.querySelector("#expName");

// Expense amount
const expenseAmount = document.querySelector("#expAmount");

// Budget place
const budgetPlace = document.querySelector("#placebudgethere");

// Balance place
let balance = document.querySelector("#placeinitialbudgethere");

// Total Expenses
let totalExpenses = document.querySelector("#totalexpenses");

// Variable that holds the monthly salary
let salary = 0;

// Function that gets the monthly income from the hero page upon clicking the "Next Step" button
buttonNext.addEventListener("click", () => {
  if (budget.value < 0 || budget.value === "") return;
  salary = budget.value;
  budgetPlace.innerText = salary;
  balance.innerText = salary;
  budget.value = "";
});

// Event listener that triggeres the addToExpenseList function
addExpense.addEventListener("click", addToExpenseList);

list.addEventListener("click", deleteCheck);

// Function that adds the expense name and amount as a list item, updating the balance and expenses as well
function addToExpenseList() {
  if (expenseName.value === "" || expenseAmount.value === "" || expenseAmount.value > 1000000) return;
  // const expenseDiv = document.createElement("div");
  const li = document.createElement("li");
  li.classList.add("list-item");
  let eName = document.createElement("h3");
  eName.innerText = expenseName.value;
  li.appendChild(eName);
  let eAmount = document.createElement("h3");
  eAmount.classList.add("amount");
  eAmount.innerText = expenseAmount.value;
  li.appendChild(eAmount);

  // QA
  // console.log('ename', eName, "eamount",eAmount)

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  deleteButton.classList.add("trashBtn");
  li.appendChild(deleteButton)
  // list.appendChild(expenseDiv);
  list.appendChild(li);

  balance.innerText = balance.innerText - expenseAmount.value;
  totalExpenses.innerText = expenseAmount.value;
  expenseName.value = "";
  expenseAmount.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  if (item.classList[0] === "trashBtn") {
    const div = item.parentElement.parentElement;
    div.remove();
    updateMoney();
  }
}

function updateMoney() {
  const money = document.querySelectorAll(".amount");
  let change = 0;
  money.forEach((el) => (change += el.innerText));
  totalExpenses.innerText = parseFloat(change);
  // console.log('balance',balance.innerText)
  // console.log('total expenses',parseFloat(totalExpenses.innerText))
  balance.innerText = parseFloat(balance.innerText) + parseFloat(change);
  if (totalExpenses.innerText === 0) {
    balance.innerText = salary;
  }
}