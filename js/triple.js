document.getElementById('btn-triple').addEventListener('click', function () {

    // step-1
    const inputField = document.getElementById('input-number-tri');
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value  = '';
    if(isNaN(inputFieldValue)){
        alert('Please Enter A Number');
        return;
    }

      //step-2
      const outputElement = document.getElementById('output-triple');
      const previousOutputValueString = outputElement.innerText;
      const previousOutputValue = parseFloat(previousOutputValueString);
    
    //   step-3
    const newResult = inputFieldValue * 3;
    outputElement.innerText = newResult
 

})