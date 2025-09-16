// for JS HTML-Templates

function renderImgDishes() {
    return `
        <img class="img_grafik" src="./assets/img/wok.jpg" alt="WOK-Bild">
    `
}

function renderDishes(index) {
    return `
        <div class="single_dishes">
            <div class="dishes_and_button">
                <p class="single_dishes_meal">${myDishes[index].meal}</p>
                <img class="plus_grafik" src="./assets/Logo/plus_button.png" 
                    onclick="addDishes(${index})" alt="plus-button">
            </div>
            <p class="single_dishes_discription">${myDishes[index].discription}</p>
            <p class="single_dishes_price">${myDishes[index].price} €</p>
        </div>
    `
}


function renderAddDishes(index) {
    return`
        <p class="basket_meal">${myDishes[index].meal}</p>    
    `
}
