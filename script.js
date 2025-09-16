// Basis JS-Datei

let dishesAdd = document.getElementById("select_dishes");
dishesAdd = "";
// let dishesAddMarker = []; 

function initOnload() {
    nextDishes = document.getElementById("show_dishes");
    shoppingBasket = document.getElementById("show_basket");
    nextDishes.innerHTML = renderImgDishes();
    for (let index = 0; index < myDishes.length; index++) {
        nextDishes.innerHTML += renderDishes(index);
    }
    shoppingBasket.innerHTML += renderShoppingBasket();
}

function addDishes(index) {
    myDishes[index].amount = myDishes[index].amount + 1;
    console.log(myDishes[index].amount);
    // dishesAddMarker += myDishes[index].meal;

    switch (myDishes[index].amount - 1) {
        case 0:
            console.log("Case = 0 eingetreten");

            dishesAdd.innerHTML = renderAddDishes(index);
            console.log(myDishes[index].meal);
            
            break;        
        default:
            break;
    }

            console.log(dishesAdd);


    // dishesAdd += renderAddDishes(index);
}
