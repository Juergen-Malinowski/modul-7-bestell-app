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
    myDishes[index].amount = myDishes[index].amount + 1;
    switch (myDishes[index].amount - 1) {
        case 0:
            dishesAdd.innerHTML += renderAddDishes(index);
            break;        
        default:
            break;
    }
}
