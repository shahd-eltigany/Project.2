var totalPrice = 0
var allProducts = document.querySelectorAll(".row a")
var div1 = document.querySelector(".modalBody")
var btn1 = document.querySelector("#btnPrice")


allProducts.forEach( function (item){
    item.onclick = function() {
        totalPrice += +(item.getAttribute("price"))
        modalBody.innerHTML += item.totalPrice 
    }
})

btn1.onclick = function () {
     modalBody(totalPrice)
}

