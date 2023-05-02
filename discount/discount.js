document.getElementById('btn-apply').addEventListener('click',function(){
    //step-1: get the price of product
    const priceOfProduct = document.getElementById('price');
    const priceOfProductString = priceOfProduct.innerText;
    const originalPrice = parseFloat(priceOfProductString);
    
    // step-2: get the pay cost 
    const payElement = document.getElementById('cost-pay');
    const payPriceString = payElement.innerText;
    const payPrice = parseFloat(payPriceString);

    // calculation
    const priceAfterDiscount = originalPrice - (originalPrice * 30/100);
    payElement.innerText = priceAfterDiscount
})

