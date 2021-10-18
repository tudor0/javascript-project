// Income value
const incomeValue = document.querySelector("#income");
// Next Step button
const nextStep = document.querySelector("#nextStep");
// Income value stored in a variable

// List class
class List {
  constructor(name, amount) {
    this.name = name;
    this.amount = amount;
  }
}

// UI class
class UI {
  static displayBook(list) {
    const list1 = document.querySelector("#list");
    const li = document.createElement("li");
    li.innerHTML = `<h3>${list.name}</h3>
        <h3>${list.amount}</h3>
        <button class='deleteBtn'><i class="fa-solid fa-eraser fa-2x"></i></button>`;
    list1.appendChild(li);
  }
  static initialAdd(money) {
    document.querySelector("#incomeUI").textContent = money;
    document.querySelector("#budgetUI").textContent = money;
  }
  static clearInitialField() {
    incomeValue.value = "";
  }
  static updateExpense(amount) {
    document.querySelector("#expensesUI").textContent =
      +document.querySelector("#expensesUI").textContent + +amount;
  }
  static lowerExpense(amount) {
    document.querySelector("#expensesUI").textContent =
      +document.querySelector("#expensesUI").textContent - +amount;
  }
  static updateBudget(amount) {
    document.querySelector("#budgetUI").textContent =
      +document.querySelector("#budgetUI").textContent + +amount;
  }
  static lowerBudget(amount) {
    document.querySelector("#budgetUI").textContent =
      +document.querySelector("#budgetUI").textContent - +amount;
  }
  static clearFields() {
    document.querySelector("#nameInput").value = "";
    document.querySelector("#amountInput").value = "";
  }
  static deleteBook(target) {
    if (target.classList.contains("deleteBtn")) {
      UI.lowerExpense(target.parentElement.childNodes[2].innerText);
      UI.updateBudget(target.parentElement.childNodes[2].innerText);
      target.parentElement.remove();
    }
  }
}

// Add the monthly income
nextStep.addEventListener("click", (e) => {
  e.preventDefault();
  const initialBudget = incomeValue.value;
  UI.initialAdd(initialBudget);
  UI.clearInitialField();
});

// Add an expense to the list
document.querySelector("#addExpense").addEventListener("click", (e) => {
  e.preventDefault();
  // Memorizing the values of the name and amount of the expense
  const name = document.querySelector("#nameInput").value;
  const amount = document.querySelector("#amountInput").value;
  // Error checking
  if (name === "" || amount === "") {
    console.log("There can not be empty fields");
    return;
  }
  // Creating a list class item
  const listItem = new List(name, amount);
  UI.displayBook(listItem);
  // Adding to the expenses amount
  UI.updateExpense(amount);
  // Lowering the budget
  UI.lowerBudget(amount);
  // Clearing the text-fields
  UI.clearFields();
});
// Checks for clicked delete buttons
document.addEventListener("click", (e) => {
  const target = e.target;
  UI.deleteBook(target);
});
