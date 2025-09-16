// for JS HTML-Templates

function renderImgDishes() {
    return `
        <img class="img_grafik" src="./assets/img/wok.jpg" alt="WOK-Bild">
    `
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

function renderShoppingBasket() {
    return `
        <h2>Ihr Warenkorb ...</h2>

        <!-- BOX show selected dishes  -->
        <div class="selection_grafik" id="select_dishes"></div>

        <div class="price_box">
            <span class="basket_subtotal">Zwischensumme:</span>
            <span class="basket_subtotal">0,00 €</span>
        </div>

        <div class="price_box">
            <span class="basket_subtotal">Fahrtkosten:</span>
            <span class="basket_subtotal">0,00 €</span>
        </div>

        <div class="price_box">
            <span class="basket_total">Gesamtpreis:</span>
            <span class="basket_total">0,00 €</span>
        </div>        
    `
}
