document.getElementById('btn-double').addEventListener('click', function(){

    // step-1: get the input field value
    const inputField = document.getElementById('input-number');
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value ='';
    if(isNaN(inputFieldValue)){
        alert('please Enter a Number');
        return;
    }

    // step-2: get the output previous value 
    const outputElement = document.getElementById('output');
    const previousOutputResultString = outputElement.innerText;
    const previousOutputResult = parseFloat(previousOutputResultString);
    

    // step-3: calculate the result
    const newResult = inputFieldValue * 2 ;
    outputElement.innerText = newResult;

})