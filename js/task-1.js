const listItems = document.querySelectorAll("li.item");
console.log("Number of categories: " + listItems.length);
listItems.forEach(logFunction);
function logFunction(item) {
    console.log("Category: " + item.firstElementChild.innerHTML);
    console.log("Elements: " + item.lastElementChild.children.length);
}


