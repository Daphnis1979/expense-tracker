const balanceEl = document.getElementById("balance");
const incomeAmountEl = document.getElementById("income-amount");
const expenseAmountEl = document.getElementById("expense-amount");
const transactionListEl = document.getElementById("transaction-list");
const transactionFormEl = document.getElementById("transaction-form");
const descriptionEl = document.getElementById("description");
const amountEl = document.getElementById("amount");

let transaction = JSON.parse(localStorage.getItem("transactions")) || [];

transactionFormEl.addEventListener("submit", addTransaction)

function addTransaction(e){
    e.preventDefault();

    //get form valuess

    const description = descriptionEl.ariaValueMax.trim();
    const amount = parseFloat(amountEl.value);

    transaction.push({
        id:Ddate.now(),
        description: description,
        amount: amount
    })
localStorage.setItem("transactions", JSON.stringify(transaction));
}