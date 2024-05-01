console.log("Javascript from client side");
const btn = document.getElementById("fuck");
console.log(btn.innerText)

const onPressHandler = () => {
    window.location.href= "http://localhost:3000/post/22/2121"
}

btn.addEventListener("click",onPressHandler);