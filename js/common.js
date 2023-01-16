// get integer value of input field

function getIntegerValue(inputId) {
    const managerInputField = document.getElementById(inputId);
    const managerInputFieldString = managerInputField.value;
    const managerInputFieldInt = parseInt(managerInputFieldString);
    return managerInputFieldInt;
}

// get number of selected players 

function getNumberOfSelectedPlayer() {
    const playerQuantity = document.getElementById('selected-players-list');
    const numberOfSelectedPlayer = playerQuantity.childElementCount;
    return numberOfSelectedPlayer;
}


function getPlayersTotalExpenses() {
    const playerBudgetInputInt = getIntegerValue('player-budget-input');
    const playerCostDisplay = document.getElementById('players-total-cost');
    const numberOfSelectedPlayer = getNumberOfSelectedPlayer();
    if(playerBudgetInputInt < 0) {
        alert("Negative value is not allow.");
    }else{
        playerCostDisplay.innerText = playerBudgetInputInt * numberOfSelectedPlayer;
    }
    return playerCostDisplay.innerText;
}