"use strict"

let tbody = document.querySelector("table tbody");
let removeAll = document.querySelector(".remove-all");
let removeSelected = document.querySelector(".remove-selected");

if (localStorage.getItem("favourites") === null || JSON.parse(localStorage.getItem("favourites")).length === 0) {
    let tr = "<tr><td colspan='4' class='text-center text-danger fw-bold'>No items</td></tr>"
    removeAll.classList.add("d-none")
    tbody.innerHTML += tr;
}
else {
    let favourites = JSON.parse(localStorage.getItem("favourites"));
    let total = 0;
    for (const product of favourites) {
        let tr = `
        <tr class="">
            <td><img src='${product.image}'></td>
            <td>${product.name}</td>
            <td>${product.desc}</td>
            <td class='price'>${product.price} * ${product.count}</td>
        </tr>
        `
        tbody.innerHTML += tr;

        let amount = product.price.replace("$", "");
        amount = parseInt(amount);
        total += amount * product.count;
    }

    let subtotalTr = `
    <tr>
        <td colspan='3' class='text-end'>Subtotal:</td>
        <td class='price'>$${total}</td>
    </tr>
    `
    tbody.innerHTML += subtotalTr;

}
removeAll.addEventListener("click", function () {
    localStorage.removeItem("favourites");
    location.reload();
})

removeSelected.addEventListener("click", function (e) {
    e.target.includes("active").localStorage.removeItem("favourites")
    // localStorage.includes("active").removeItem("favourites");
    location.reload();
})
document.addEventListener("click", function (e) {
    if(localStorage.getItem("favourites").includes("tr")){
        if (!localStorage.getItem("favourites").includes("active")) {
            e.target.classList.add("active")
        }
        else{
            e.target.classList.add("active")
        }
    }
    // localStorage.removeItem(e.target.classList("active"));

})