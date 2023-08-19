function getInputField(inputId) {
   const inputField = document.getElementById(inputId);
   const inputText = inputField.value;
   const inputValue = parseFloat(inputText);
   if (isNaN(inputValue)) {
      alert('Please input a valid number')
      return 0;
   }
   return inputValue;
}
function setElement(elementId,elementValue){
   const element = document.getElementById(elementId);
   element.innerText = elementValue;
}