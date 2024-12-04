//linking HTML elements with JS variables
const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');

//boolean for form validation
let isError = false;

/*function to check if the user inputs +,- or spaces within the input.
Done using regex and .replace(). 
REGEX - used by adding /str/ 
/g is a global flag meaning all occurnces after first is found
\s is used to match spaces
\+ is used to match +
[] makes regex a character class which matches each character individually
*/
function cleanInputString(str) {
    const regex = /[+-\s]/g;
    return str.replace(regex, '');
}

//function to check for imaginay number inputs
function isInvalidInput(str) {
    // i flag makes the regex case insensitive
    // [0-9]  or \d character class matches any number between 0 and 9
    // + in regex allows to match the character occurance one or more times
    const regex = /\de\d/i;
    //str.match(regex) returns the first matched instance (unless g flag is used) in an array
    return str.match(regex);    //returns null if no match found
}

//function to add entries to the calorie counter
function addEntry(){
    //to know which category the entry goes in
    //entryDropdown.value is the user specified dropdown value
    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
    //.querySelectorAll() returns a nodelist of all the entries that the user has inputed
    //querying by text inputs
    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length;
    //we want to display HTMLstring in the inputContainer using JS
    const HTMLString = `
        <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
        <input type="text" placeholder="Name" id="${entryDropdown.value}-${entryNumber}-name"/>
        <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
        <input type="number" min="0" placeholder="Calories" id="${entryDropdown.value}-${entryNumber}-calories"/>
        `;
    //appending HTMLString to targetInputContainer
    targetInputContainer.innerHTML += HTMLString;
}