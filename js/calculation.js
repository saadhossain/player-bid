//Calculate total Player expense
document.getElementById('calculate-btn').addEventListener('click', function(){
    const perPlayerCost = getInputValue('per-player-field');
    //Get the total Selected Player in the List
    const selectedPlayer = document.getElementById('selected-player-count').innerText;
    const selectedPlayerCount = parseFloat(selectedPlayer);
    //Calculate Total Player Expenses
    const totalPlayerExpense = perPlayerCost * selectedPlayerCount;
    //Set the total Player Expenses to respective placeholder to show output/frontend
    document.getElementById('player-expense').innerText = totalPlayerExpense;
})
//Calculate the total Expense
document.getElementById('calculate-total-btn').addEventListener('click', function(){
    const totalPlayerExpense = getPlaceholderAmount('player-expense');
    const managerCost = getInputValue('manager-field');
    const coachCost = getInputValue('coach-field');
    
    //Final total Expense for all Player, Manager and Coach
    const finalTotal = totalPlayerExpense + managerCost + coachCost;
    //Set the final Total Amount to respective placeholder to show output/frontend
    document.getElementById('total-expense').innerText = finalTotal;
})