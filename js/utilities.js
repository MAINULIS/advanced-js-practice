// function no-1: get the input field
function getValueFormInputFieldById(inputFieldId){
    const inputFieldElement = document.getElementById(inputFieldId);
    const inputFieldValueString = inputFieldElement.value ;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputFieldElement.value ='';
    
    if(isNaN(inputFieldValue)){
        alert('Please Enter A Number');
    }
  return inputFieldValue;

};

// function-2: get text element value
function getTextElementValueById(textElementId){
    const textElement = document.getElementById(textElementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
};

// function-3: set the values
function setElementValuesById(textElementId , newValue){
    const element = document.getElementById(textElementId);
    element .innerText = newValue;
}

