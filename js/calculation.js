// ---------budget-----------
function getNumberOfSelectedPlayer() {
    // debugger;
    const playerQuantity = document.getElementById('selected-players-list');
    const numberOfSelectedPlayer = playerQuantity.childElementCount;
    return numberOfSelectedPlayer;
}

// calculate player expenses

document.getElementById('calculate-button').addEventListener('click', function() {
    // debugger;
    const playerBudgetInputField = document.getElementById('player-budget-input');
    const playerBudgetInputString = playerBudgetInputField.value;
    const playerBudgetInputInt = parseInt(playerBudgetInputString);

    const playerCostDisplay = document.getElementById('players-total-cost');
    const numberOfSelectedPlayer = getNumberOfSelectedPlayer();
    if(playerBudgetInputInt < 0) {
        alert("Negative value is not allow.");
    }else{
        playerCostDisplay.innerText = playerBudgetInputInt * numberOfSelectedPlayer;
    }
})