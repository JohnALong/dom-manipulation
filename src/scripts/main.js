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
const removeDashed = document.querySelector(".dashed");
console.log("removeDashed", removeDashed);
removeDashed.classList.remove("dashed");
console.log("removeDashed after remove", removeDashed);
const newFooterClass = document.querySelector(".article__footer");
console.log("new footer class", newFooterClass);
newFooterClass.classList.add("goldenrod");
console.log("footer class after add", newFooterClass);