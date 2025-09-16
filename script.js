// Basis JS-Datei

function initOnload() {
    nextDishes = document.getElementById("show_dishes");

    for (let index = 0; index < myDishes.length; index++) {
        nextDishes.innerHTML += renderDishes(index);
    }

}

