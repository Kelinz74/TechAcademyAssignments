// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

function myMove() {
    let id = null;
    const elem = document.getElementById("animate");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
        if (pos == 700) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.left = pos + "px";
            elem.style.right = pos + "px";
        }
    }

}
