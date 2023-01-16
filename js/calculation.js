// ---------budget-----------


// calculate player expenses

document.getElementById('calculate-button').addEventListener('click', function() {
    debugger;
    getPlayersTotalExpenses();
})


// calculate total cost
document.getElementById('calculate-total-button').addEventListener('click', function() {
    const managerInputValue = getIntegerValue('manager-input');
    const coachInputValue = getIntegerValue('coach-input');
    const playerExpenses = getPlayersTotalExpenses();
    const playerExpensesInt = parseInt(playerExpenses);
    const totalExpensesDisplay = document.getElementById('total-expenses-display');
    if(managerInputValue < 0 || coachInputValue < 0) {
        alert("Negative value not allow.");
    }else{
        totalExpensesDisplay.innerText = managerInputValue + coachInputValue + playerExpensesInt;
    }
})
