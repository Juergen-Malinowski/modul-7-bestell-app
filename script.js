// Basis JS-Datei

let dishesAdd = document.getElementById("select_dishes");
dishesAdd.innerHTML = "";

function initOnload() {
    nextDishes = document.getElementById("show_dishes");
    shoppingBasket = document.getElementById("show_basket");
    nextDishes.innerHTML = renderImgDishes();
    for (let index = 0; index < myDishes.length; index++) {
        nextDishes.innerHTML += renderDishes(index);
    }
}


function addDishes(index) {
    dishesAdd.innerHTML = "";
    myDishes[index].amount = myDishes[index].amount + 1;
    for (let index = 0; index < myDishes.length; index++) {
        if (myDishes[index].amount > 0) {
            dishesAdd.innerHTML += renderAddDishes(index);
        }
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
}


function clearDishes(index) {
    myDishes[index].amount = 0;
    dishesAdd.innerHTML = "";
    for (let index = 0; index < myDishes.length; index++) {
        if (myDishes[index].amount > 0) {
            dishesAdd.innerHTML += renderAddDishes(index);
        }
    }
}
