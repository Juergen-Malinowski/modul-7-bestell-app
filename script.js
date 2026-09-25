// Main application logic for menu rendering, basket management, responsive behavior, and contact form submission.

// Application state and DOM references.
let dishesAdd = document.getElementById("select_dishes");
dishesAdd.innerHTML = "";
const DELIVERY_COST = 5;
let subTotal = 0;
let totalAmount = 0;
let errorMarker = false;
let makeOrder = false;
let mediaMobile = false;
let showBasket = true;
let mediaWidth = window.innerWidth;

// Basket pricing elements.
let nextDishes = document.getElementById("show_dishes");
let addSubtotal = document.getElementById("travel_expenses");
let addTravelExpenses = document.getElementById("go_subtotal");
let addTotalAmount = document.getElementById("total_amount");
addSubtotal.innerHTML = "";
addTravelExpenses.innerHTML = "";
addTotalAmount.innerHTML = "";

// Elements used to switch between desktop and mobile basket layouts.
let sectionDishes = document.getElementById("section_dishes");
let sectionBasket = document.getElementById("section_basket");
let travelMobile = document.getElementById("travel_expenses");
let subtotalMobile = document.getElementById("go_subtotal");
let totalMobile = document.getElementById("total_amount");
let controlButton = document.getElementById("button_open_basket");
let closeBasketButton = document.getElementById("button_close_basket");
let basketH2 = document.getElementById("headline_h2");


function checkMediaWidth() {
    // Updates the layout state based on the current viewport width.
    if (window.innerWidth < 768) {
        mediaMobile = true;
        showBasket = false;
    } else {
        mediaMobile = false;
        showBasket = true;
    }
}

function initOnload() {
    // Initializes responsive behavior, menu content, and basket totals.
    checkMediaWidth();
    window.addEventListener("resize", () => {
        checkMediaWidth();
        makeChangeClassForInit();
    });
    nextDishes.innerHTML = renderImgDishes();
    makeChangeClassForInit();
    for (let index = 0; index < myDishes.length; index++) {
        nextDishes.innerHTML += renderDishes(index);
    }
    renderAllCosts();
}

function makeChangeClassForInit() {
    // Applies the desktop or mobile layout classes for the current viewport.
    if (mediaMobile) {
        setClassMobile();
    } else {
        setClassPC();
    }
}

function setClassMobile() {
    // Switches menu and basket elements to their mobile layout classes.
    sectionDishes.classList.replace("dishes", "dishes_mobile");
    sectionBasket.classList.replace("shopping_basket", "shopping_basket_mobile");
    travelMobile.classList.replace("price_box", "price_box_mobile");
    subtotalMobile.classList.replace("price_box", "price_box_mobile");
    totalMobile.classList.replace("price_box", "price_box_mobile");
    controlButton.classList.remove("hiddenButtonBasket");
    controlButton.classList.add("showButtonBasket");
}

function setClassPC() {
    // Restores the desktop layout classes for menu and basket elements.
    sectionDishes.classList.replace("dishes_mobile", "dishes");
    sectionBasket.classList.replace("shopping_basket_mobile", "shopping_basket");
    travelMobile.classList.replace("price_box_mobile", "price_box");
    subtotalMobile.classList.replace("price_box_mobile", "price_box");
    totalMobile.classList.replace("price_box_mobile", "price_box");
    controlButton.classList.remove("showButtonBasket");
    controlButton.classList.add("hiddenButtonBasket");
}

function addDishes(index) {
    // Increases a dish quantity and rebuilds the basket contents.
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
    // Recalculates and renders all basket price components.
    if (errorMarker) {
        errorMarker = false;
        clearErrorMessage();
    }
    getPriceSubTotal();
    addSubtotal.innerHTML = renderSubtotal(index);
    addTravelExpenses.innerHTML = renderTravelExpenses(subTotal > 0 ? DELIVERY_COST : 0);
    addTotalAmount.innerHTML = renderTotalAmount();
}

function getPriceSubTotal() {
    // Calculates the basket subtotal and total including delivery costs.
    subTotal = 0;
    totalAmount = 0;
    for (let index = 0; index < myDishes.length; index++) {
        if (myDishes[index].amount > 0) {
            subTotal += myDishes[index].price * myDishes[index].amount;
        }
    }
    if (subTotal > 0) {
        totalAmount = subTotal + DELIVERY_COST;
    }
}

function reduceDishes(index) {
    // Decreases a dish quantity and rebuilds the basket contents.
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
    // Removes a dish from the basket and refreshes the basket contents.
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
    // Formats a numeric value as a German euro currency string.
    return new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(value_number);
}

function placeTheOrder() {
    // Displays either the test-order confirmation or the empty-basket error.
    if (totalAmount > 0) {
        makeOrder = true;
        let orderBox = document.getElementById("errorOrder");
        orderBox.innerHTML = "";
        orderBox.innerHTML = renderOrder();
    } else {
        errorMarker = true;
        let errorMessage = document.getElementById("errorOrder");
        errorMessage.innerHTML = "";
        errorMessage.innerHTML = renderOrderError();
    }
}

function clearErrorMessage() {
    // Clears order feedback and resets the basket after a completed test order.
    let errorMessage = document.getElementById("errorOrder");
    errorMessage.innerHTML = "";
    if (makeOrder) {
        clearBasket();
        makeOrder = false;
        if (mediaMobile) {
            mobileCloseBasket();
        }
    }
}

function clearBasket() {
    // Resets all dish quantities and refreshes basket pricing.
    for (let index = 0; index < myDishes.length; index++) {
        myDishes[index].amount = 0;
    }
    dishesAdd.innerHTML = "";
    renderAllCosts();
}


function mobileShowBasket() {
    // Opens the mobile basket and hides the open-basket button.
    sectionBasket.classList.replace("shopping_basket_mobile", "show_shopping_basket_mobile");
    basketH2.classList.remove("mobile_noBasket");
    basketH2.classList.add("mobile_showBasket");
    closeBasketButton.hidden = false;
    controlButton.classList.remove("showButtonBasket");
    controlButton.classList.add("hiddenButtonBasket");
}

function mobileCloseBasket() {
    // Closes the mobile basket and restores the open-basket button.
    closeBasketButton.hidden = true;
    controlButton.classList.remove("hiddenButtonBasket");
    controlButton.classList.add("showButtonBasket");
    basketH2.classList.remove("mobile_showBasket");
    basketH2.classList.add("mobile_noBasket");
    sectionBasket.classList.replace("show_shopping_basket_mobile", "shopping_basket_mobile");
}