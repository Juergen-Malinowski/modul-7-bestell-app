// for JS HTML-Templates

function renderDishes(index) {
    return `
        <div class="single_dishes">
            <p class="single_dishes_meal">${myDishes[index].meal}</p>
            <p class="single_dishes_discription">${myDishes[index].discription}</p>
            <p class="single_dishes_price">${myDishes[index].price} €</p>
        </div>
    `
}