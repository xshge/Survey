document.addEventListener("DOMContentLoaded", function (){
    document.querySelector("#one").addEventListener("change", function(){
        console.log("Information about oyster history in NYC");
    })
    document.querySelector("#two").addEventListener("change", function(){
        window.location.href ="two.html";
    })
})