document.getElementById('btn-apply').addEventListener('click', function () {
    // step-1:get the price of product
    const priceOfProduct = document.getElementById('price');
    const originalPriceString = priceOfProduct.innerText;
    const originalPrice = parseFloat(originalPriceString);

    // step-2:get the pay cost 
    const payConst = document.getElementById('cost-pay');
    const payPriceString = payConst.innerText;
    const payPrice = parseFloat(payPriceString);

    // step-3 get the input field value
    const couponElement = document.getElementById('coupon');
    const couponValue = couponElement.value;
    couponElement.value = '';

    if (couponValue === 'DISC30') {
        const priceAfterDiscount = originalPrice - (originalPrice * 30 / 100);
        payConst.innerText = priceAfterDiscount
    }
    else{
        alert('please Enter A Valid Coupon Code')
    }


})