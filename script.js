// Basis JS-Datei

let dishesAdd = document.getElementById("select_dishes");
dishesAdd.innerHTML = "";

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

// go to all render-function for costs
function renderAllCosts() {
    addSubtotal.innerHTML = renderSubtotal();
    addTravelExpenses.innerHTML = renderTravelExpenses();
    addTotalAmount.innerHTML = renderTotalAmount();
}

function addDishes(index) {
    dishesAdd.innerHTML = "";
    myDishes[index].amount = myDishes[index].amount + 1;
    for (let index = 0; index < myDishes.length; index++) {
        if (myDishes[index].amount > 0) {
            dishesAdd.innerHTML += renderAddDishes(index);
        }
    };
    addSubtotal.innerHTML = renderSubtotal();
    addTotalAmount.innerHTML = renderTotalAmount();
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
    addSubtotal.innerHTML = renderSubtotal();
    addTotalAmount.innerHTML = renderTotalAmount();
}


function clearDishes(index) {
    myDishes[index].amount = 0;
    dishesAdd.innerHTML = "";
    for (let index = 0; index < myDishes.length; index++) {
        if (myDishes[index].amount > 0) {
            dishesAdd.innerHTML += renderAddDishes(index);
        }
    }
    addSubtotal.innerHTML = renderSubtotal();
    addTotalAmount.innerHTML = renderTotalAmount();
}
