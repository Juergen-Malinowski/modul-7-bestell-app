// Basis JS-Datei

let dishesAdd = document.getElementById("select_dishes");
dishesAdd.innerHTML = "";
let subTotal = 0;
let totalAmount = 0;
let errorMarker = false;
let makeOrder = false;

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

function renderAllCosts(index) {
    // go to ALL render-function for COSTS
    if (errorMarker) {
        errorMarker = false;
        clearErrorMessage();
    }
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

function showEuroValue(value_number) {
    // function get value as a parameter "value_number"
    // function give back a string in correct EURO-Format
    return new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(value_number);
}

function placeTheOrder() {
    // do the order for the shopping-basket
    if (totalAmount > 0) {
        // order is OK
        makeOrder = true;
        let orderBox = document.getElementById("errorOrder");
        orderBox.innerHTML = "";
        orderBox.innerHTML = renderOrder();
    } else {
        // ERROR - there is NO order !
        errorMarker = true;
        let errorMessage = document.getElementById("errorOrder");
        errorMessage.innerHTML = "";
        errorMessage.innerHTML = renderOrderError();
    }
}

function clearErrorMessage() {
    // CLEAR error-order-box AND clear message-box after ORDER
    let errorMessage = document.getElementById("errorOrder");
    errorMessage.innerHTML = "";
    // CLEAR shopping-basket after ORDER
    if (makeOrder) {
        clearBasket();
        makeOrder = false;
    }
}

function clearBasket() {
    // clear the shopping basket after the order is made
    for (let index = 0; index < myDishes.length; index++) {
        myDishes[index].amount = 0;        
    }
    dishesAdd.innerHTML = "";
    renderAllCosts();
}


// SEND E-Mail
function sendMail(event){
    event.preventDefault();
    const data = new FormData(event.target);

    fetch("https://formspree.io/f/xnnzkyyk", {
        method: "POST",
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    }).then(() => {
        // window.location.replace("./mail_confirmation.html");
        window.location.href = "./html/mail_confirmation.html";
    }).catch((error) => {
        console.log(error);
    });
}