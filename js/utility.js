//Get the Value from Input Field
function getInputValue(inputId){
    const getInput = document.getElementById(inputId);
    const getInputValue = getInput.value;
    const inputAmount = parseFloat(getInputValue);
    return inputAmount;
}
//Get the Amount from any text placeholder, such as total or final total
function getPlaceholderAmount(placeholderId){
    const getPlaceholder = document.getElementById(placeholderId);
    const getPlaceholderInnertext = getPlaceholder.innerText;
    const placeholderAmount = parseFloat(getPlaceholderInnertext);
    return placeholderAmount;
}