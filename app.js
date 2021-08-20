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




//**************************************************************
//Add Fuctions
function updateField(fieldId, updateValue) {
    fieldId.innerText = updateValue;
    calculateTotalPrice();
}

function calculateTotalPrice() {
    const basePriceAmount = parseFloat(basePriceDisplay.innerHTML);
    const extraMemoryCostAmount = parseFloat(extraMemoryCostDisplay.innerHTML);
    const extraStorageCostAmount = parseFloat(extraStorageCostDisplay.innerHTML);
    const deliveryChargeAmount = parseFloat(deliveryChargeDisplay.innerHTML);
    totalPriceDisplay.innerHTML = basePriceAmount + extraMemoryCostAmount + extraStorageCostAmount + deliveryChargeAmount;
}