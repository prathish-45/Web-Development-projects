var button = document.querySelector("button");

button.addEventListener("click", (event) => {
    document.querySelector("h1").classList.toggle("huge");
});

var heading = document.querySelector("h1");
heading.addEventListener("mouseover", (event) => {
    heading.classList.toggle("huge");
})