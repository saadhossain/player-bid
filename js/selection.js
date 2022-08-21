const allPlayer = [];
//Common function to add the player to the selected list
function selectPlayer(element) {
    if (allPlayer.length === 5) {
        alert('Sorry! You have Reached Maximum Selection Limit');
        return;
    }
    else {
        const player = element.parentNode.parentNode.children[0].innerText;
        const playerCount = document.getElementById('selected-player-count').innerText = allPlayer.length + 1;

        //Push the data to the array
        allPlayer.push(player);

        const listContainer = document.getElementById('selected-container');

        // listContainer.innerHTML = '';
        const playerSelect = document.createElement('ul');
        playerSelect.innerHTML = `
        <li class="mx-4 my-1 font-semibold"><span class="mr-3">${playerCount}.</span> ${player}</li>
        `;
        listContainer.appendChild(playerSelect);
        //Disabled Button After Added
        element.setAttribute('disabled', true);
        element.style.backgroundColor = '#818CF8';
    }
}
