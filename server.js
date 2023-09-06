const plus_btn = document.getElementById("plus-btn");
;

plus_btn.addEventListener("click", () => {
    document.getElementById("page2").style.zIndex = "2";
});

const close = document.getElementById("close-btn");
close.addEventListener("click", () => {
    document.getElementById("page2").style.zIndex = "-1";
});


const read = document.getElementById("btn");

read.addEventListener("click", () => {
    // Replace 'https://example.com' with the URL you want to open in a new tab
    window.open('./page3.html', '_blank');
});
