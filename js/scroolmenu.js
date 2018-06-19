window.addEventListener("load", function () {
    var topo = document.querySelector("#headertopo");
    window.addEventListener("scroll", function () {
        if (window.pageYOffset > 220) {
            topo.classList.add(".topofixo");
        } else {
            topo.classList.remove(".topofixo");
        }
    });
});
