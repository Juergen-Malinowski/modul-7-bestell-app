// Basis JS-Datei

let dishesAdd = document.getElementById("select_dishes");
dishesAdd.innerHTML = "";
let subTotal = 0;
let totalAmount = 0;

function initOnload() {
    nextDishes = document.getElementById("show_dishes");
    addSubtotal = document.getElementById("travel_expenses");
    addTravelExpenses = document.getElementById("go_subtotal");
    addTotalAmount = document.getElementById("total_amount");
    addSubtotal.innerHTML = "";
    addTravelExpenses.innerHTML = "";
    addTotalAmount.innerHTML = "";
    nextDishes.innerHTML = renderImgDishes();
    for (let index = 0; index < myDishes.length; index++) {
        nextDishes.innerHTML += renderDishes(index);
    }
    renderAllCosts();
}


function renderAllCosts(index) {
    // go to ALL render-function for COSTS
    getPriceSubTotal();
    addSubtotal.innerHTML = renderSubtotal(index);
    addTravelExpenses.innerHTML = renderTravelExpenses();
    addTotalAmount.innerHTML = renderTotalAmount();
}

function getPriceSubTotal() {
    // FOR-Loop to get SUBTOTAL
    subTotal = 0;
    totalAmount = 0;
    for (let index = 0; index < myDishes.length; index++) {
        if (myDishes[index].amount > 0) {
            subTotal += myDishes[index].price * myDishes[index].amount;
        }
    }
    // add travel expenses when something is in the basket
    if (subTotal > 0) {
        totalAmount = subTotal + 5.00;
    }
}


function addDishes(index) {
    dishesAdd.innerHTML = "";
    myDishes[index].amount = myDishes[index].amount + 1;
    for (let index = 0; index < myDishes.length; index++) {
        if (myDishes[index].amount > 0) {
            dishesAdd.innerHTML += renderAddDishes(index);
        }
    };
    renderAllCosts();
}


function reduceDishes(index) {
    if (myDishes[index].amount > 0) {
        myDishes[index].amount = myDishes[index].amount - 1;
        dishesAdd.innerHTML = "";
        for (let index = 0; index < myDishes.length; index++) {
            if (myDishes[index].amount > 0) {
                dishesAdd.innerHTML += renderAddDishes(index);
            }
        }
    };
    renderAllCosts();
}


function clearDishes(index) {
    myDishes[index].amount = 0;
    dishesAdd.innerHTML = "";
    for (let index = 0; index < myDishes.length; index++) {
        if (myDishes[index].amount > 0) {
            dishesAdd.innerHTML += renderAddDishes(index);
        }
    }
    renderAllCosts();
}
