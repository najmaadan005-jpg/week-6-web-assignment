let budget = 5000;
let expenses = [];

document.getElementById("startBtn").addEventListener("click", () => {
    alert("Budget set at KSh " + budget);
});

document.getElementById("addExpenseBtn").addEventListener("click", addExpense);

function addExpense() {

    let category =
        document.getElementById("category").value;

    let amount =
        Number(document.getElementById("amount").value);

    if (category === "" || amount <= 0) {
        alert("Enter a valid category and amount");
        return;
    }

    expenses.push({
        category: category,
        amount: amount
    });

    updateDashboard();

    document.getElementById("category").value = "";
    document.getElementById("amount").value = "";
}

function updateDashboard() {

    let list =
        document.getElementById("expenseList");

    list.innerHTML = "";

    let total = 0;

    for (let i = 0; i < expenses.length; i++) {

        total += expenses[i].amount;

        let li = document.createElement("li");

        li.textContent =
            expenses[i].category +
            " - KSh " +
            expenses[i].amount;

        list.appendChild(li);
    }

    let status =
        document.getElementById("status");

    if (total > budget) {
        status.textContent =
            "⚠️ Over Budget! Total Spending: KSh " + total;

        status.style.color = "red";
    } else {
        status.textContent =
            "✅ Within Budget. Total Spending: KSh " + total;

        status.style.color = "green";
    }
}