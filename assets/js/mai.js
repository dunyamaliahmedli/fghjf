let btn = document.querySelectorAll(".btn");
let basket = document.querySelector(".basket");
let modal = document.querySelector(".modal");

// var shoppingCart = (function () {

//     cart = [];

//     function Item(name, price, count) {
//         this.name = name;
//         this.price = price;
//         this.count = count;
//     }

// btn.forEach(x => {
//     x.addEventListener("click", function (e) {
//         e.preventDefault();
//         shoppingCart();

//     })
// })

basket.addEventListener("click", function () {

    modal.style.display = "block";
})