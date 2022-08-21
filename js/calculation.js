//Calculate total Player expense
document.getElementById('calculate-btn').addEventListener('click', function(){
    const perPlayerCost = getInputValue('per-player-field');

    //Error Handler to prevent invalid amount
    if(isNaN(perPlayerCost)){
        alert('UFF!! Please Provide a Valid Amount');
        document.getElementById('per-player-field').value = '';
        return;
    }
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
    //Error Handler to prevent invalid amount
    if(isNaN(managerCost) || isNaN(coachCost)){
        alert('UFF!! Please Provide a Valid Amount');
        document.getElementById('manager-field').value = '';
        document.getElementById('coach-field').value = '';
        return;
    }
    //Final total Expense for all Player, Manager and Coach
    const finalTotal = totalPlayerExpense + managerCost + coachCost;
    //Set the final Total Amount to respective placeholder to show output/frontend
    document.getElementById('total-expense').innerText = finalTotal;
})