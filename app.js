const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput =document.getElementById("budget")
const entryDropdown =document.geElementById("entry-dropdown")
const addEntryButton =document.getElementById('add-entry');
const clearButton =document.getElementById('clear');
const output =document.getElementById("output");

let isError = false;

function cleanTnputString(str){
    let regex =/[+-\s]/g;
}