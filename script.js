// Basis JS-Datei

let dishesAdd = document.getElementById("select_dishes");
dishesAdd.innerHTML = "";
let subTotal = 0;
let totalAmount = 0;
let errorMarker = false;
let makeOrder = false;
let mediaMobile = false;
let sectionDishes = document.getElementById("section_dishes");
let sectionBasket = document.getElementById("section_basket");


function checkMediaWidth() {
    // checking for nessesary mobile_style.css
    let mediaWidth = window.innerWidth;
    if (mediaWidth < 768) {
        mediaMobile = true;
    } else {
        mediaMobile = false;
    }
}

function initOnload() {
    // first load html
    // first check to get Mobile-Style ...
    checkMediaWidth();
    // eventListener now running all time and check vor Mobile-Style nessesary
    window.addEventListener("resize", () => {
        checkMediaWidth();
        makeChangeClassForInit();
    });
    nextDishes = document.getElementById("show_dishes");
    addSubtotal = document.getElementById("travel_expenses");
    addTravelExpenses = document.getElementById("go_subtotal");
    addTotalAmount = document.getElementById("total_amount");
    addSubtotal.innerHTML = "";
    addTravelExpenses.innerHTML = "";
    addTotalAmount.innerHTML = "";
    nextDishes.innerHTML = renderImgDishes();
    makeChangeClassForInit();
    for (let index = 0; index < myDishes.length; index++) {
        // render the card with all dishes
        nextDishes.innerHTML += renderDishes(index);
    }
    // render all costs-items of shopping-basket
    renderAllCosts();
}

function makeChangeClassForInit() {
    // depending on Boolean from "mediaMobile" use 
    // the mobile-Class OR switch back
    if (mediaMobile) {
        sectionDishes.classList.remove("dishes");
        sectionDishes.classList.add("dishes_mobile")
        sectionBasket.classList.remove("shopping_basket");
        sectionBasket.classList.add("shopping_basket_mobile")
    } else {
        sectionDishes.classList.remove("dishes_mobile")
        sectionDishes.classList.add("dishes");
        sectionBasket.classList.remove("shopping_basket_mobile")
        sectionBasket.classList.add("shopping_basket");
    }
}


function addDishes(index) {
    checkMediaWidth();
    // render a new dish in the shopping-basket
    dishesAdd.innerHTML = "";
    myDishes[index].amount = myDishes[index].amount + 1;
    for (let index = 0; index < myDishes.length; index++) {
        if (myDishes[index].amount > 0) {
            dishesAdd.innerHTML += renderAddDishes(index);
        }
    };
    // render all costs-items of shopping-basket
    renderAllCosts();
}

function renderAllCosts(index) {
    checkMediaWidth();
    // go to ALL render-functions for COSTS of shopping-basket
    if (errorMarker) {
        // if shopping-basket is emty ... ERROR: frist choise a dish
        errorMarker = false;
        clearErrorMessage();
    }
    // get SUBTOTAL
    getPriceSubTotal();
    // render all costs of shopping-basket
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
    checkMediaWidth();
    // render user have reduce a dish
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
    checkMediaWidth();
    // clear the sopping-basket after order
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
    checkMediaWidth();
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
    checkMediaWidth();
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
    checkMediaWidth();
    // clear the shopping basket after the order is made
    for (let index = 0; index < myDishes.length; index++) {
        myDishes[index].amount = 0;
    }
    dishesAdd.innerHTML = "";
    renderAllCosts();
}


// SEND E-Mail
function sendMail(event) {
    // user wants contact with store per E-Mail    
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
