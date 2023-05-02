document.getElementById('btn-deposit').addEventListener('click',function(){
 
  const newDepositAmount = getValueFormInputFieldById('deposit-field');
  const previousDepositAmount = getTextElementValueById('deposit-total');
  const currentDepositTotal = previousDepositAmount + newDepositAmount ;
  setElementValuesById('deposit-total', currentDepositTotal);

  // Balance
  const previousBalanceTotal = getTextElementValueById('balance-total');
  const currentBalanceTotal = previousBalanceTotal + newDepositAmount ;
  setElementValuesById('balance-total', currentBalanceTotal);
})