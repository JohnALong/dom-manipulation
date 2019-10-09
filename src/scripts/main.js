const newHeader = document.querySelector(".article__header");
console.log("newHeader", newHeader);
newHeader.textContent = "Welcome to the John Long blog.";
console.log(newHeader);
const newClassList = document.querySelectorAll(".article__header");
console.log("all article__header elements", newClassList);
for (let i = 0; i < newClassList.length; i++) {
    newClassList[i].classList.add("important");
}
console.log("newClassList after for loop", newClassList);