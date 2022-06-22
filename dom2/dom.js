const container = document.querySelector("#container");
console.log(container);

const content = document.createElement("div");
content.className = "content";
content.textContent = "text from content js";
container.appendChild(content);

const red = document.createElement("p");
red.textContent = "hey im red";
red.style.color = "red";
container.appendChild(red);

const blue = document.createElement("h3");
blue.textContent = "im a blue h3";
blue.style.color = "blue";
container.appendChild(blue);

const box = document.createElement("div");
// box.textContent = "dklfjdl"
box.style.cssText = "background-color:pink; border-style:solid";
container.appendChild(box);

const indiv = document.createElement("h1");
const inp = document.createElement("p");
indiv.textContent = "im a div";
inp.textContent = "ME TOO!";
box.appendChild(indiv);
box.appendChild(inp);

const btn = document.querySelector("#button");
// btn.onclick = () => alert("from js");

const btn2 = document.querySelector("#button2");
btn2.addEventListener("click", () => alert("hello world"));

function alertFunction() {
    alert("yaya btn3")
}
btn.addEventListener('click', function (e) {
    console.log(e.target);
    e.target.style.backgroundColor = 'blue'
  });