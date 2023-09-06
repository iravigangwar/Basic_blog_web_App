const plus_btn = document.getElementById("plus-btn");
;

plus_btn.addEventListener("click", () => {
    document.getElementById("page2").style.zIndex = "2";
});

const close = document.getElementById("close-btn");
close.addEventListener("click", () => {
    document.getElementById("page2").style.zIndex = "-1";
});



const buttons = document.getElementsByClassName("btn");
for (const button of buttons) {
    button.addEventListener("click", () => {
        window.open('./page3.html', '_blank');
    });
}
