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

function renderSubtotal() {
    return `
        <span class="basket_subtotal">Zwischensumme:</span>
        <span class="basket_subtotal">0,00 €</span>
    `
}

function renderTotalAmount() {
    return `
        <span class="basket_total">Gesamtpreis:</span>
        <span class="basket_total">0,00 €</span>    
    `

}

function renderAddDishes(index) {
    return `
        <p class="basket_meal">${myDishes[index].meal}</p>

    <div class="icons_position"> 

        <div class="icons_disply_row">  
            <img class="icon_grafik" src="./assets/Logo/plus_button.png" 
                onclick="addDishes(${index})" alt="plus-button">
            <p class="icon_grafik" id="change_amount">${myDishes[index].amount}x</p>
            <img class="icon_grafik" src="./assets/Logo/minus_button.png" 
                onclick="reduceDishes(${index})" alt="minus-button"> 
        </div>             
        
        <div class="icons_disply_row_rubbish">   
            <p class="icon_grafik">${myDishes[index].amount * myDishes[index].price}€</p>
            <img class="icon_grafik_rubbish" src="./assets/Logo/rubbish.png" 
                onclick="clearDishes(${index})" alt="rubbish-button">             
        </div>           
    </div>  
    `
}
