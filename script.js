// Define initial value
let expenses = []; //array
let monthlyIncome = 0; //number
let expenseTotal = 0; //number
let balance = 0; // number 

// Get References to HTML elements
let monthlyBudget = document.getElementById("monthly_budget");
let incomeInput = document.getElementById("income_input");
let updateBudgetButton = document.getElementById("update_budget_button");
let nameInput = document.getElementById("name_input");
let amountInput = document.getElementById("amount_input");
let addExpenseButton = document.getElementById("add_expense_button");
let expenseList = document.getElementById("expense_list"); // DIV
let totalExpenses = document.getElementById('total_expenses')
let remainingBalance = document.getElementById("remaining_balance");

// Build a function that will store the user input 
// from the Update Budget Form & Display it
function updateBudget(event) {
    event.preventDefault();
    monthlyIncome = incomeInput.value;
    monthlyBudget.innerText = "$" + monthlyIncome;
    updateBalance();
 }

// Add updateBudget function to update budget buttton
updateBudgetButton.onclick = updateBudget;

// Build a helper function that calculates th remaining balance
function updateBalance() {
    balance = monthlyIncome - expenseTotal;
    remainingBalance.innerText = "$" + balance;
    if (balance < 0) {
        remainingBalance.classList.remove("green");
        remainingBalance.classList.add("red");
    } else {
        remainingBalance.classList.remove("red");
        remainingBalance.classList.add("green");
    }

}

// Build a function that will add a new expense to the expense array
// and display it in the app

function addExpense(event) {
    event.preventDefault();
    let expense = {
    name: nameInput.value,
    amount: amountInput.value
    };
    let newExpense = document.createElement('p');
    
    // Add the new expense to the app
    newExpense.innerText = expense.name + ": $" + expense.amount;
    expenseList.appendChild(newExpense);
    let expenseAmount = parseInt(amountInput.value);
    expenses.push(expenseAmount);
    updateExpenseTotal();
}

addExpenseButton.onclick = addExpense;

function updateExpenseTotal() {
    expenseTotal = 0;
    for (let i = 0; i < expenses.length; i++) {
    expenseTotal = expenseTotal + expenses[i];
    }
    totalExpenses.innerText = "$" + expenseTotal;
    updateBalance();
    }
    


