//**************************************************************
//All HTML Display Field Declaration
const basePriceDisplay = document.getElementById('base-price-display');
const extraMemoryCostDisplay = document.getElementById('extra-memory-cost-display');
const extraStorageCostDisplay = document.getElementById('extra-storage-cost-display');
const deliveryChargeDisplay = document.getElementById('delivery-charge-display');
const totalPriceDisplay = document.getElementById('total-price-display');


//**************************************************************
//Add On Click Listener to All Buttons
//Memory Cost Buttons
document.getElementById('memory-8gb-btn').addEventListener('click',
    function () {
        updateField(extraMemoryCostDisplay, "0");
    });
document.getElementById('memory-16gb-btn').addEventListener('click',
    function () {
        updateField(extraMemoryCostDisplay, "180");
    });

//Storage Cost Buttons
document.getElementById('storage-256gb-btn').addEventListener('click',
    function () {
        updateField(extraStorageCostDisplay, "0");
    });
document.getElementById('storage-512gb-btn').addEventListener('click',
    function () {
        updateField(extraStorageCostDisplay, "100");
    });
document.getElementById('storage-1tb-btn').addEventListener('click',
    function () {
        updateField(extraStorageCostDisplay, "180");
    });

//Delivery Charge Buttons
document.getElementById('delivery-free').addEventListener('click',
    function () {
        updateField(deliveryChargeDisplay, "0");
    });
document.getElementById('delivery-fast').addEventListener('click',
    function () {
        updateField(deliveryChargeDisplay, "20");
    });

//Promo Code Add Button
document.getElementById('promo-code-add-btn').addEventListener('click',
    function () {
        checkPromoCode();  
        updateTotal();      
    });


//**************************************************************
//Add Fuctions

//Update Field in Table
function updateField(fieldId, updateValue) {
    fieldId.innerText = updateValue;    
    calculateTotalPrice();
    updateTotal();
}

//Calculate Total Price Field in Table
function calculateTotalPrice() {
    const basePriceAmount = parseFloat(basePriceDisplay.innerText);
    const extraMemoryCostAmount = parseFloat(extraMemoryCostDisplay.innerText);
    const extraStorageCostAmount = parseFloat(extraStorageCostDisplay.innerText);
    const deliveryChargeAmount = parseFloat(deliveryChargeDisplay.innerText);
    totalPriceDisplay.innerText = basePriceAmount + extraMemoryCostAmount + extraStorageCostAmount + deliveryChargeAmount;
}

//Update Total Field and Check Promo
function updateTotal(){
    const totalDisplayField = document.getElementById('total-display');
    const totalPriceAmount = parseFloat(totalPriceDisplay.innerText);
    if(checkPromoCode()==true){
        totalDisplayField.innerText = totalPriceAmount - totalPriceAmount*0.2;
    }
    else{
        totalDisplayField.innerText = totalPriceAmount;
    }    
}

//Check Promo Code Applied or Not 
function checkPromoCode(){
    const promoCodeInputField = document.getElementById('promo-code-input');
    const promoCodeValue = promoCodeInputField.value;
    if(promoCodeValue == "stevekaku"){
        promoCodeInputField.setAttribute("disabled", true);
        return true;
    }
    else{
        return false;
    }
}

