$(document).ready(function(){
    $("#auto-table-40k").fadeIn();
    $("#auto-table-70k").fadeOut();
    $("#auto-table-85k").fadeOut();
    $("#auto-table-100k").fadeOut();
    $("#auto-table-130k").fadeOut();
    });
    $(document).ready(function(){
      $("#auto-option-40k").click(function(){
      document.getElementById("auto-option-txt").textContent= "R$ 40.000,00";
      $("#auto-table-70k").fadeOut(200);
      $("#auto-table-85k").fadeOut(200);
      $("#auto-table-100k").fadeOut(200);
      $("#auto-table-130k").fadeOut(200);
       $("#auto-table-40k").delay(205).fadeIn(200);
      });
    });
    $(document).ready(function(){
      $("#auto-option-70k").click(function(){
      document.getElementById("auto-option-txt").textContent= "R$ 70.000,00";
      $("#auto-table-40k").fadeOut(200);
      $("#auto-table-85k").fadeOut(200);
      $("#auto-table-100k").fadeOut(200);
      $("#auto-table-130k").fadeOut(200);
       $("#auto-table-70k").delay(205).fadeIn(200);
      });
    });
    $(document).ready(function(){
      $("#auto-option-85k").click(function(){
      document.getElementById("auto-option-txt").textContent= "R$ 85.000,00";
      $("#auto-table-70k").fadeOut(200);
      $("#auto-table-40k").fadeOut(200);
      $("#auto-table-100k").fadeOut(200);
      $("#auto-table-130k").fadeOut(200);
      $("#auto-table-85k").delay(205).fadeIn(200);
      });
    });
    $(document).ready(function(){
      $("#auto-option-100k").click(function(){
      document.getElementById("auto-option-txt").textContent= "R$ 100.000,00";
      $("#auto-table-70k").fadeOut(200);
      $("#auto-table-85k").fadeOut(200);
      $("#auto-table-40k").fadeOut(200);
      $("#auto-table-130k").fadeOut(200); 
      $("#auto-table-100k").delay(205).fadeIn();
      });
    });
    $(document).ready(function(){
      $("#auto-option-130k").click(function(){
      document.getElementById("auto-option-txt").textContent= "R$ 130.000,00";
      $("#auto-table-70k").fadeOut(200);
      $("#auto-table-85k").fadeOut(200);
      $("#auto-table-100k").fadeOut(200);
      $("#auto-table-40k").fadeOut(200);
      $("#auto-table-130k").delay(205).fadeIn();
      });
    });


    // PLANOS 40K
    const bt40k36x = document.getElementById("40k36x");
    const bt40k32x = document.getElementById("40k32x");
    const bt40k24x = document.getElementById("40k24x");
    const bt40k12x = document.getElementById("40k12x");
    bt40k36x.addEventListener("click", function(){
        document.getElementById("plano").value = "rec9AbjvTQVs4FqVi";
        console.log(document.getElementById("plano").value)
    });
    bt40k32x.addEventListener("click", function(){
        document.getElementById("plano").value = "recHW5QEyrzLub02d";
        console.log(document.getElementById("plano").value)
    });
    bt40k24x.addEventListener("click", function(){
        document.getElementById("plano").value = "recyfiVLVtjeCDG5W";
        console.log(document.getElementById("plano").value)
    });
    bt40k12x.addEventListener("click", function(){
        document.getElementById("plano").value = "rectBdF1rAGboSOux";
        console.log(document.getElementById("plano").value)
    });

    // PLANOS 70K
    const bt70k36x = document.getElementById("70k36x");
    const bt70k32x = document.getElementById("70k32x");
    const bt70k24x = document.getElementById("70k24x");
    const bt70k12x = document.getElementById("70k12x");
    bt70k36x.addEventListener("click", function(){
        document.getElementById("plano").value = "recjiVE9528AWVZpJ";
        console.log(document.getElementById("plano").value)
    });
    bt70k32x.addEventListener("click", function(){
        document.getElementById("plano").value = "recGGH9wC3PZCw53v";
        console.log(document.getElementById("plano").value)
    });
    bt70k24x.addEventListener("click", function(){
        document.getElementById("plano").value = "recNtqNVqpb62gZFE";
        console.log(document.getElementById("plano").value)
    });
    bt70k12x.addEventListener("click", function(){
        document.getElementById("plano").value = "recjq88qNi7PFF6pv";
        console.log(document.getElementById("plano").value)
    });

        // PLANOS 80K
        const bt85k36x = document.getElementById("85k36x");
        const bt85k32x = document.getElementById("85k32x");
        const bt85k24x = document.getElementById("85k24x");
        const bt85k12x = document.getElementById("85k12x");
        bt85k36x.addEventListener("click", function(){
            document.getElementById("plano").value = "rec0EBAR3pTM5VzwN";
            console.log(document.getElementById("plano").value)
        });
        bt85k32x.addEventListener("click", function(){
            document.getElementById("plano").value = "recWJwsvb9wzMmDdf";
            console.log(document.getElementById("plano").value)
        });
        bt85k24x.addEventListener("click", function(){
            document.getElementById("plano").value = "rec2bsLKl6aEBcaSN";
            console.log(document.getElementById("plano").value)
        });
        bt85k12x.addEventListener("click", function(){
            document.getElementById("plano").value = "recdTOYxq5mTbOK4r";
            console.log(document.getElementById("plano").value)
        });

     // PLANOS 100K
     const bt100k36x = document.getElementById("100k36x");
     const bt100k32x = document.getElementById("100k32x");
     const bt100k24x = document.getElementById("100k24x");
     const bt100k12x = document.getElementById("100k12x");
     bt100k36x.addEventListener("click", function(){
         document.getElementById("plano").value = "rectcxuv4k1rPYuLN";
         console.log(document.getElementById("plano").value)
     });
     bt100k32x.addEventListener("click", function(){
         document.getElementById("plano").value = "recLy1oGmSkTL25Wj";
         console.log(document.getElementById("plano").value)
     });
     bt100k24x.addEventListener("click", function(){
         document.getElementById("plano").value = "recqFh44wffv4dpxK";
         console.log(document.getElementById("plano").value)
     });
     bt100k12x.addEventListener("click", function(){
         document.getElementById("plano").value = "recZ7xxrkI7Cl5yBl";
         console.log(document.getElementById("plano").value)
     });

     // PLANOS 130K
     const bt130k36x = document.getElementById("130k36x");
     const bt130k32x = document.getElementById("130k32x");
     const bt130k24x = document.getElementById("130k24x");
     const bt130k12x = document.getElementById("130k12x");
     bt130k36x.addEventListener("click", function(){
         document.getElementById("plano").value = "rectcxuv4k1rPYuLN";
         console.log(document.getElementById("plano").value)
     });
     bt130k32x.addEventListener("click", function(){
         document.getElementById("plano").value = "recLy1oGmSkTL25Wj";
         console.log(document.getElementById("plano").value)
     });
     bt130k24x.addEventListener("click", function(){
         document.getElementById("plano").value = "recqFh44wffv4dpxK";
         console.log(document.getElementById("plano").value)
     });
     bt130k12x.addEventListener("click", function(){
         document.getElementById("plano").value = "recZ7xxrkI7Cl5yBl";
         console.log(document.getElementById("plano").value)
     });