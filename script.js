// Basis JS-Datei

function initOnload() {
    nextDishes = document.getElementById("show_dishes");

    for (let index = 0; index < myDishes.length; index++) {
        nextDishes.innerHTML += renderDishes(index);
    }

}

function renderDishes(index) {
    return `
        <div class="single_dishes">
            <p class="single_dishes_meal">${myDishes[index].meal}</p>
            <p class="single_dishes_discription">${myDishes[index].discription}</p>
            <p class="single_dishes_price">${myDishes[index].price} €</p>
        </div>
    `
}