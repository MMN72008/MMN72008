let history = [];
let results = [];
let memory = [];

function addCharacter(character) {
    const inputField = document.forms['Calculator']['Input'];
    inputField.value += character;
}
function addCharacterq(character) {
    const inputField = document.forms['Calculator']['Input'];
    if(inputField.value !=""){
        inputField.value += character;
    }
    else{
        inputField.value=""
    }
}

function clearEntry() {
    const inputField = document.forms['Calculator']['Input'];
    inputField.value = '';
}

function clearAll() {
    const inputField = document.forms['Calculator']['Input'];
    inputField.value = '';
}

function deleteLast() {
    const inputField = document.forms['Calculator']['Input'];
    inputField.value = inputField.value.slice(0, -1);
}

function toggleSign() {
    const inputField = document.forms['Calculator']['Input'];
    if (inputField.value.charAt(0) === '-') {
        inputField.value = inputField.value.slice(1);
    } else {
        inputField.value = '-' + inputField.value;
    }
}

function calculateResult() {
    const inputField = document.forms['Calculator']['Input'];
    try {
        // Replace '^' with '**' for exponentiation and evaluate

        let expression = inputField.value.replace(/\^/g, '**');
        let result = eval(expression);// Use with caution

        // Format result to avoid long decimal places
        result = Math.round(result * 1000000000) / 1000000000;

        // Store history
        history.push(`${inputField.value} = ${result}`);
        results.push(result);


        inputField.value = result;
        updateHistoryList();

    } catch (error) {
        inputField.value = 'Error';
    }
}

function recallMemory() {
    const inputField = document.forms['Calculator']['Input'];
    if (memory !== null) {
        inputField.value = memory;

    }
}

function storeMemory() {
    const inputField = document.forms['Calculator']['Input'];
    try {
        let value = eval(inputField.value);
        memory = value;
        alert(`Stored ${value} in memory.`);
    } catch (error) {
        alert('Invalid expression for storing in memory.');
    }
    console.log(memory)
}

function clearMemory() {
    memory = null;
    alert('Memory cleared.');
}

function showHistory() {
    document.getElementById('history-list').innerHTML = history.map(item => `<li>${item}</li>`).join('');
    document.getElementById('historybtn').classList.add('on');
    document.getElementById('resultsbtn').classList.remove('on');
}

function showResults() {
    document.getElementById('history-list').innerHTML = results.map(result => `<li>${result}</li>`).join('');
    document.getElementById('historybtn').classList.remove('on');
    document.getElementById('resultsbtn').classList.add('on');
}

function updateHistoryList() {
    // Automatically show history after calculation
    showHistory();
}
/////////////////keyboard/////////////////////////////////////////////////////////////
document.addEventListener('keydown', function (event) {

    for (var i = 48; i < 58; i++) {
        var l = i - 48;
        if (event.keyCode == i) {
            var l = i - 48;
            var keychar;
            for (var n = 0; n <= l; n++) {
                keychar = n;

            }
            addCharacter(keychar);
            keychar = 0;
        }

    }

    if (event.keyCode == 106) {
        addCharacterq('*');
    }
    if (event.keyCode == 109) {
        addCharacterq('-');
    }
    if (event.keyCode == 107) {
        addCharacterq('+');
    }
    if (event.keyCode == 111) {
        addCharacterq('/');
    }
    if (event.keyCode == 110) {
        addCharacterq('.');
    }



});
