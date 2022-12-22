// HOMEWORK PART 1

let headerOne = document.querySelector("#myTitle");
headerOne.innerHTML = "Not cool as me! :)";

let firstParagraph = document.querySelector(".paragraph");
firstParagraph.innerHTML = "I changed this paragraph !!!";

let secondParagraph = document.querySelector(".second");
secondParagraph.innerHTML = "It is really easy";

let secondParagraphText = document.querySelector("text");
secondParagraphText.innerText = "I changed this too"

let lastDiv = document.getElementsByTagName("div")[2];

let anotherHeader = lastDiv.querySelector("h1");
anotherHeader.innerHTML = "Another header is changed"

let headerThree = lastDiv.querySelector("h3");
headerThree.innerHTML = "The last h3 element"
