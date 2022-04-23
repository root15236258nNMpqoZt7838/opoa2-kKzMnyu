$(document).ready(function(){
    $("#auto-table-40k").fadeIn();
    $("#auto-table-55k").fadeOut();
    $("#auto-table-70k").fadeOut();
    $("#auto-table-85k").fadeOut();
    $("#auto-table-100k").fadeOut();
    $("#auto-table-130k").fadeOut();
    $("#comp-40k").fadeIn();
    $("#comp-70k").fadeOut();
    $("#comp-85k").fadeOut();
    $("#comp-100k").fadeOut();
    $("#comp-130k").fadeOut();
    });
    $(document).ready(function(){
      $("#auto-option-40k").click(function(){
      document.getElementById("auto-option-txt").textContent= "R$40.000,00";
      $("#auto-table-55k").fadeOut();
      $("#auto-table-70k").fadeOut(200);
      $("#auto-table-85k").fadeOut(200);
      $("#auto-table-100k").fadeOut(200);
      $("#auto-table-130k").fadeOut(200);
       $("#auto-table-40k").delay(205).fadeIn(200);
      });
    });
    $(document).ready(function(){
        $("#auto-option-55k").click(function(){
        document.getElementById("auto-option-txt").textContent= "R$55.000,00";
        $("#auto-table-70k").fadeOut(200);
        $("#auto-table-40k").fadeOut(200);
        $("#auto-table-85k").fadeOut(200);
        $("#auto-table-100k").fadeOut(200);
        $("#auto-table-130k").fadeOut(200);
         $("#auto-table-55k").delay(205).fadeIn(200);
        });
      });
    $(document).ready(function(){
      $("#auto-option-70k").click(function(){
      document.getElementById("auto-option-txt").textContent= "R$70.000,00";
      $("#auto-table-40k").fadeOut(200);
      $("#auto-table-55k").fadeOut(200);
      $("#auto-table-85k").fadeOut(200);
      $("#auto-table-100k").fadeOut(200);
      $("#auto-table-130k").fadeOut(200);
       $("#auto-table-70k").delay(205).fadeIn(200);
      });
    });
    $(document).ready(function(){
      $("#auto-option-85k").click(function(){
      document.getElementById("auto-option-txt").textContent= "R$85.000,00";
      $("#auto-table-70k").fadeOut(200);
      $("#auto-table-40k").fadeOut(200);
      $("#auto-table-55k").fadeOut(200);
      $("#auto-table-100k").fadeOut(200);
      $("#auto-table-130k").fadeOut(200);
      $("#auto-table-85k").delay(205).fadeIn(200);
      });
    });
    $(document).ready(function(){
      $("#auto-option-100k").click(function(){
      document.getElementById("auto-option-txt").textContent= "R$100.000,00";
      $("#auto-table-70k").fadeOut(200);
      $("#auto-table-85k").fadeOut(200);
      $("#auto-table-40k").fadeOut(200);
      $("#auto-table-55k").fadeOut(200);
      $("#auto-table-130k").fadeOut(200); 
      $("#auto-table-100k").delay(205).fadeIn();
      });
    });
    $(document).ready(function(){
      $("#auto-option-130k").click(function(){
      document.getElementById("auto-option-txt").textContent= "R$130.000,00";
      $("#auto-table-70k").fadeOut(200);
      $("#auto-table-85k").fadeOut(200);
      $("#auto-table-100k").fadeOut(200);
      $("#auto-table-40k").fadeOut(200);
      $("#auto-table-55k").fadeOut(200);
      $("#auto-table-130k").delay(205).fadeIn();
      });
    });

     document.getElementById("auto-comp-40k").addEventListener("click", function(){

        document.getElementById("credito-comp").innerText = "R$40.000,00";
         $("#comp-40k").delay(300).fadeIn(300);
         $("#comp-70k").fadeOut(300);
         $("#comp-85k").fadeOut(300);
         $("#comp-100k").fadeOut(300);
         $("#comp-130k").fadeOut(300);
    });
     document.getElementById("auto-comp-70k").addEventListener("click", function(){


        document.getElementById("credito-comp").innerText = "R$70.000,00";
        $("#comp-40k").fadeOut(300);
        $("#comp-70k").delay(300).fadeIn(300);
        $("#comp-85k").fadeOut(300);
        $("#comp-100k").fadeOut(300);
        $("#comp-130k").fadeOut(300);
    });
    document.getElementById("auto-comp-85k").addEventListener("click", function(){


        document.getElementById("credito-comp").innerText = "R$85.000,00";
        $("#comp-40k").fadeOut(300);
        $("#comp-70k").fadeOut(300);
        $("#comp-85k").delay(300).fadeIn(300);
        $("#comp-100k").fadeOut(300);
        $("#comp-130k").fadeOut(300);
    });
    document.getElementById("auto-comp-100k").addEventListener("click", function(){

        document.getElementById("credito-comp").innerText = "R$100.000,00";
        $("#comp-40k").fadeOut(300);
        $("#comp-70k").fadeOut(300);
        $("#comp-85k").fadeOut(300);
        $("#comp-100k").delay(300).fadeIn(300);
        $("#comp-130k").fadeOut(300);
    });
    document.getElementById("auto-comp-130k").addEventListener("click", function(){

        document.getElementById("credito-comp").innerText = "R$130.000,00";
        console.log(document.getElementById("credito-comp").innerText)
        $("#comp-40k").fadeOut(300);
        $("#comp-70k").fadeOut(300);
        $("#comp-85k").fadeOut(300);
        $("#comp-100k").fadeOut(300);
        $("#comp-130k").delay(300).fadeIn(300);
    });


    const currentComp = document.getElementById("auto-ui-value");
const btNext = document.getElementById("auto-ui-next");
const btPrev = document.getElementById("auto-ui-prev");

btNext.addEventListener("click", function() {
    if (currentComp.innerText === "R$40.000,00"){
        $("#comp-mobile-40k").fadeOut(300)
        $("#comp-mobile-70k").delay(300).fadeIn(300);
        $("#comp-mobile-85k").fadeOut(300);
        $("#comp-mobile-100k").fadeOut(300);
        $("#comp-mobile-130k").fadeOut(300);
        currentComp.innerText = "R$70.000,00";
    }else if (currentComp.innerText === "R$70.000,00"){
        $("#comp-mobile-40k").fadeOut(300);
        $("#comp-mobile-70k").fadeOut(300);
        $("#comp-mobile-85k").delay(300).fadeIn(300);
        $("#comp-mobile-100k").fadeOut(300);
        $("#comp-mobile-130k").fadeOut(300);
        currentComp.innerText = "R$85.000,00";
    }else if (currentComp.innerText === "R$85.000,00"){
        $("#comp-mobile-40k").fadeOut(300);
        $("#comp-mobile-70k").fadeOut(300);
        $("#comp-mobile-85k").fadeOut(300);
        $("#comp-mobile-100k").delay(300).fadeIn(300);
        $("#comp-mobile-130k").fadeOut(300);
        currentComp.innerText = "R$100.000,00";
    }else if (currentComp.innerText === "R$100.000,00"){
        $("#comp-mobile-40k").fadeOut(300);
        $("#comp-mobile-70k").fadeOut(300);
        $("#comp-mobile-85k").fadeOut(300);
        $("#comp-mobile-100k").fadeOut(300);
        $("#comp-mobile-130k").delay(300).fadeIn(300);
        currentComp.innerText = "R$130.000,00";
    }else if (currentComp.innerText === "R$130.000,00"){
        $("#comp-mobile-40k").delay(300).fadeIn(300);
        $("#comp-mobile-70k").fadeOut(300);
        $("#comp-mobile-85k").fadeOut(300);
        $("#comp-mobile-100k").fadeOut(300);
        $("#comp-mobile-130k").fadeOut(300);
        currentComp.innerText = "R$40.000,00";
    }
})

btPrev.addEventListener("click", function() {
    if (currentComp.innerText === "R$40.000,00"){
        $("#comp-mobile-40k").fadeOut(300)
        $("#comp-mobile-70k").fadeOut(300)
        $("#comp-mobile-85k").fadeOut(300);
        $("#comp-mobile-100k").fadeOut(300);
        $("#comp-mobile-130k").delay(300).fadeIn(300);
        currentComp.innerText = "R$130.000,00";
    }else if (currentComp.innerText === "R$70.000,00"){
        $("#comp-mobile-40k").delay(300).fadeIn(300);
        $("#comp-mobile-70k").fadeOut(300);
        $("#comp-mobile-85k").fadeOut(300)
        $("#comp-mobile-100k").fadeOut(300);
        $("#comp-mobile-130k").fadeOut(300);
        currentComp.innerText = "R$40.000,00";
    }else if (currentComp.innerText === "R$85.000,00"){
        $("#comp-mobile-40k").fadeOut(300);
        $("#comp-mobile-70k").delay(300).fadeIn(300);
        $("#comp-mobile-85k").fadeOut(300);
        $("#comp-mobile-100k").fadeOut(300)
        $("#comp-mobile-130k").fadeOut(300);
        currentComp.innerText = "R$70.000,00";
    }else if (currentComp.innerText === "R$100.000,00"){
        $("#comp-mobile-40k").fadeOut(300);
        $("#comp-mobile-70k").fadeOut(300);
        $("#comp-mobile-85k").delay(300).fadeIn(300);
        $("#comp-mobile-100k").fadeOut(300);
        $("#comp-mobile-130k").fadeOut(300)
        currentComp.innerText = "R$85.000,00";
    }else if (currentComp.innerText === "R$130.000,00"){
        $("#comp-mobile-40k").fadeOut(300)
        $("#comp-mobile-70k").fadeOut(300);
        $("#comp-mobile-85k").fadeOut(300);
        $("#comp-mobile-100k").delay(300).fadeIn(300);
        $("#comp-mobile-130k").fadeOut(300);
        currentComp.innerText = "R$100.000,00";
    }
})