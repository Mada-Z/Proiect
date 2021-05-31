if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function maskOption(imgPath, imgText) {
    var curImage = document.getElementById('mask');
    
    curImage.src = imgPath;
    curImage.alt = imgText;
    curImage.title = imgText;
 }
 
function lightOption(imgPath, imgText) {
    var curImage = document.getElementById('light');
    
    curImage.src = imgPath;
    curImage.alt = imgText;
    curImage.title = imgText;
 }

 function standOption(imgPath, imgText) {
    var curImage = document.getElementById('stand');
    
    curImage.src = imgPath;
    curImage.alt = imgText;
    curImage.title = imgText;
 }

 function chargerOption(imgPath, imgText) {
    var curImage = document.getElementById('charger');
    
    curImage.src = imgPath;
    curImage.alt = imgText;
    curImage.title = imgText;
 }
 function actionOption(imgPath, imgText) {
    var curImage = document.getElementById('action');
    
    curImage.src = imgPath;
    curImage.alt = imgText;
    curImage.title = imgText;
 }
function ready(){
    var rmv = document.getElementsByClassName('cart-btn');
    for (var i = 0; i< rmv.length; i++){
        var button = rmv[i];
        button.addEventListener('click', removeProd);
    }

    var quan = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quan.length; i++) {
        var input = quan[i]
        input.addEventListener('change', qChange)
    }

    var addBtn = document.getElementsByClassName('add')[0];
    addBtn.addEventListener('click', addProduct);
    // document.getElementsByClassName('purchase')[0].addEventListener('click', function(event){
    //     alert('Thank you for your purchase');
        // var products = getElementsByClassName('cart-items')[0];
        // while (products.hasChildNodes()){
        //     products.removeChild(products.firstChild);
        // }
        //total();
    // });
}
function removeProd(event){
    var btn = event.target;
    btn.parentElement.parentElement.remove()
    total();
}

function addProduct(event){
    var btn = event.target;
    var prod = btn.parentElement.parentElement;
    var name = prod.getElementsByClassName('name')[0].innerText;
    var price = prod.getElementsByClassName('price')[0].innerText;
    var prod2 = prod.parentElement;
    var tn = prod2.getElementsByClassName('thumbnail')[0].src;
    var thumbnails = ["file:///D:/Tehnici%20Web/Proiect/action_hat.jpg",
                      "file:///D:/Tehnici%20Web/Proiect/bt21_lightup.jpg",
                      "file:///D:/Tehnici%20Web/Proiect/facemasks.jpg",
                      "file:///D:/Tehnici%20Web/Proiect/phone_stand.jpg",
                      "file:///D:/Tehnici%20Web/Proiect/car_phone_charger.jpg"];
    if (thumbnails.includes(tn)) {
        alert('Choose an option');
    }
    else {
        // addProd(name, price, tn);
        // total();
        console.log(name, price, tn);
    }

}



function addProd(name, price, tn){
    var p = document.createElement('div');
    p.classList.add('cart-row');
    var products = document.getElementsByClassName('cart-items')[0];
    var prodNames = document.getElementsByClassName('cart-item-title');
    for (var i =0; i< prodNames.length; i++){
        if (prodNames.innerText == name){
            alert("This product is already added to the cart.");
            return;
        }
    }
    var content = `
    <div class="cart-item cart-column">
        <img class="cart-item-image" src="${tn}" width="100" height="100">
        <span class="cart-item-title">${name}</span>
    </div>
    <span class="cart-price cart-column">${price}</span>
    <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" value="1">
        <button class="cart-btn" type="button">REMOVE</button>
    </div>`
    p.innerHTML = content;
    products.append(p);
    p.getElementsByClassName('cart-btn')[0].addEventListener('click', removeProd);
}

function qChange(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    total();
}

function total(){
    var products = document.getElementsByClassName('cart-items')[0];
    var cart = products.getElementsByClassName('cart-row');
    var t = 0;
    for (var i = 0; i < cart.length; i++) {
        var prod = cart[i];
        var price = prod.getElementsByClassName('cart-price')[0];
        var quan = prod.getElementsByClassName('cart-quantity-input')[0];
        var p = parseFloat(price.innerText.replace('$', ''));
        var q = quan.value;
        t = t + (p * q);
    }
    t = Math.round(t*100) / 100;
    document.getElementsByClassName('cart-total-price')[0].innerText = t + '$';

}
