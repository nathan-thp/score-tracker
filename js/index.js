let points;
let item;
let btnAdd = document.getElementById("btnAdd");
const ul = document.getElementById("list");

/*function createItem() {
    points = document.getElementById("points")
    item = document.getElementById("item")

    document.getElementById("list").innerHTML(item + points)
}
*/

btnAdd.addEventListener("click", function createItem() {
    points = document.getElementsByTagName("input")[0].value
    item = document.getElementsByTagName("input")[1].value
    let li;

    //document.getElementById("list").innerHTML = item;
    li = document.createElement("li").innerHTML = item;
    ul.appendChild(li)
    }
);
