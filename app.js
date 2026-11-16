const button = document.createElement("button");

button.textContent = "Click Me!";

button.onclick = () => {
    alert("Hello! JavaScript is working!");
};

document.body.appendChild(button);
