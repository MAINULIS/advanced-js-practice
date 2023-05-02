document.getElementById('btn-withdraw').addEventListener('click',function(){

    const newWithdrawAmount = getValueFormInputFieldById('withdraw-field');
    const previousWithdrawAmount = getTextElementValueById('withdraw-total');
    const currentWithdrawTotal = previousWithdrawAmount + newWithdrawAmount ;
    setElementValuesById('withdraw-total',currentWithdrawTotal);
    // Balance
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setElementValuesById('balance-total',currentBalanceTotal);
})