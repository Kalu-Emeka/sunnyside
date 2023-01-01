var topBar = document.getElementById("top");

function scrollT() {
    window.scrollTo({
        top: 0,
        behaviour: "smooth"
    })
}
topBar.addEventListener("click", scrollT);