
const container = document.getElementById("container");
const button = document.getElementById("button");


button.addEventListener('click', () => {

    var image = document.createElement('img');
    image.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    container.appendChild(image);
});