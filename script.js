// Basis JS-Datei

function initOnload() {
    nextDishes = document.getElementById("show_dishes");
    shoppingBasket = document.getElementById("show_basket");

    for (let index = 0; index < myDishes.length; index++) {
        nextDishes.innerHTML += renderDishes(index);
    }
    shoppingBasket.innerHTML += renderShoppingBasket();
}

