$(document).ready(function(){
    $("#auto-table-40k").fadeIn();
    $("#auto-table-70k").fadeOut();
    $("#auto-table-85k").fadeOut();
    $("#auto-table-100k").fadeOut();
    $("#auto-table-130k").fadeOut();
    $("#comp-40k").fadeIn(300);
    $("#comp-70k").fadeOut(300);
    $("#comp-85k").fadeOut(300);
    $("#comp-100k").fadeOut(300);
    $("#comp-130k").fadeOut(300);
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
    const valorCredito = document.getElementById("valor-credito");
    const parcelaPre = document.getElementById("valor-parcela-pre");
    const parcelaPos = document.getElementById("valor-parcela-pos");
    const parcelasPre = document.getElementById("parcelas-pre");
    bt40k36x.addEventListener("click", function(){
        document.getElementById("plano").value = "rec9AbjvTQVs4FqVi";
        valorCredito.innerText = "R$ 40.000,00"
        parcelaPre.innerText = "R$ 500,00"
        parcelaPos.innerText = "R$ 675,00"
        parcelasPre.innerText = "36"

    });
    bt40k32x.addEventListener("click", function(){
        document.getElementById("plano").value = "recHW5QEyrzLub02d";
        valorCredito.innerText = "R$ 40.000,00"
        parcelaPre.innerText = "R$ 800,00"
        parcelaPos.innerText = "R$ 380,00"
        parcelasPre.innerText = "32"
    });
    bt40k24x.addEventListener("click", function(){
        document.getElementById("plano").value = "recyfiVLVtjeCDG5W";
        valorCredito.innerText = "R$ 40.000,00"
        parcelaPre.innerText = "R$ 700,00"
        parcelaPos.innerText = "R$ 770,00"
        parcelasPre.innerText = "24"
    });
    bt40k12x.addEventListener("click", function(){
        document.getElementById("plano").value = "rectBdF1rAGboSOux";
        valorCredito.innerText = "R$ 40.000,00"
        parcelaPre.innerText = "R$ 1.080,00"
        parcelaPos.innerText = "R$ 950,00"
        parcelasPre.innerText = "12"
    });

    // PLANOS 70K
    const bt70k36x = document.getElementById("70k36x");
    const bt70k32x = document.getElementById("70k32x");
    const bt70k24x = document.getElementById("70k24x");
    const bt70k12x = document.getElementById("70k12x");
    bt70k36x.addEventListener("click", function(){
        document.getElementById("plano").value = "recjiVE9528AWVZpJ";
        document.getElementById("plano").value = "rectBdF1rAGboSOux";
        valorCredito.innerText = "R$ 70.000,00"
        parcelaPre.innerText = "R$ 900,00"
        parcelaPos.innerText = "R$ 1.150,00"
        parcelasPre.innerText = "36"
    });
    bt70k32x.addEventListener("click", function(){
        document.getElementById("plano").value = "recGGH9wC3PZCw53v";
        valorCredito.innerText = "R$ 70.000,00"
        parcelaPre.innerText = "R$ 1.400,00"
        parcelaPos.innerText = "R$ 655,00"
        parcelasPre.innerText = "32"
    });
    bt70k24x.addEventListener("click", function(){
        document.getElementById("plano").value = "recNtqNVqpb62gZFE";
        valorCredito.innerText = "R$ 70.000,00"
        parcelaPre.innerText = "R$ 1.250,00"
        parcelaPos.innerText = "R$ 1.320,00"
        parcelasPre.innerText = "24"
    });
    bt70k12x.addEventListener("click", function(){
        document.getElementById("plano").value = "recjq88qNi7PFF6pv";
        valorCredito.innerText = "R$ 70.000,00"
        parcelaPre.innerText = "R$ 1.900,00"
        parcelaPos.innerText = "R$ 1.660,00"
        parcelasPre.innerText = "12"
    });

        // PLANOS 80K
        const bt85k36x = document.getElementById("85k36x");
        const bt85k32x = document.getElementById("85k32x");
        const bt85k24x = document.getElementById("85k24x");
        const bt85k12x = document.getElementById("85k12x");
        bt85k36x.addEventListener("click", function(){
            document.getElementById("plano").value = "rec0EBAR3pTM5VzwN";
            valorCredito.innerText = "R$ 85.000,00"
            parcelaPre.innerText = "R$ 1.100,00"
            parcelaPos.innerText = "R$ 1.380,00"
            parcelasPre.innerText = "36"
        });
        bt85k32x.addEventListener("click", function(){
            document.getElementById("plano").value = "recWJwsvb9wzMmDdf";
            valorCredito.innerText = "R$ 85.000,00"
            parcelaPre.innerText = "R$ 1.700,00"
            parcelaPos.innerText = "R$ 790,00"
            parcelasPre.innerText = "32"
        });
        bt85k24x.addEventListener("click", function(){
            document.getElementById("plano").value = "rec2bsLKl6aEBcaSN";
            valorCredito.innerText = "R$ 85.000,00"
            parcelaPre.innerText = "R$ 1.500,00"
            parcelaPos.innerText = "R$ 1.620,00"
            parcelasPre.innerText = "24"
        });
        bt85k12x.addEventListener("click", function(){
            document.getElementById("plano").value = "recdTOYxq5mTbOK4r";
            valorCredito.innerText = "R$ 85.000,00"
            parcelaPre.innerText = "R$ 2.300,00"
            parcelaPos.innerText = "R$ 2.020,00"
            parcelasPre.innerText = "12"
        });

     // PLANOS 100K
     const bt100k36x = document.getElementById("100k36x");
     const bt100k32x = document.getElementById("100k32x");
     const bt100k24x = document.getElementById("100k24x");
     const bt100k12x = document.getElementById("100k12x");
     bt100k36x.addEventListener("click", function(){
         document.getElementById("plano").value = "rectcxuv4k1rPYuLN";
         valorCredito.innerText = "R$ 100.000,00"
         parcelaPre.innerText = "R$ 1.300,00"
         parcelaPos.innerText = "R$ 1.600,00"
         parcelasPre.innerText = "36"
     });
     bt100k32x.addEventListener("click", function(){
         document.getElementById("plano").value = "recLy1oGmSkTL25Wj";
         valorCredito.innerText = "R$ 100.000,00"
         parcelaPre.innerText = "R$ 2.000,00"
         parcelaPos.innerText = "R$ 935,00"
         parcelasPre.innerText = "32"
     });
     bt100k24x.addEventListener("click", function(){
         document.getElementById("plano").value = "recqFh44wffv4dpxK";
         valorCredito.innerText = "R$ 100.000,00"
         parcelaPre.innerText = "R$ 1.800,00"
         parcelaPos.innerText = "R$ 1.870,00"
         parcelasPre.innerText = "24"
     });
     bt100k12x.addEventListener("click", function(){
         document.getElementById("plano").value = "recZ7xxrkI7Cl5yBl";
         valorCredito.innerText = "R$ 100.000,00"
         parcelaPre.innerText = "R$ 2.700,00"
         parcelaPos.innerText = "R$ 2.380,00"
         parcelasPre.innerText = "12"
     });

     // PLANOS 130K
     const bt130k36x = document.getElementById("130k36x");
     const bt130k32x = document.getElementById("130k32x");
     const bt130k24x = document.getElementById("130k24x");
     const bt130k12x = document.getElementById("130k12x");
     bt130k36x.addEventListener("click", function(){
         document.getElementById("plano").value = "reciewdL4Xt0ebYVQ";
         valorCredito.innerText = "R$ 130.000,00"
         parcelaPre.innerText = "R$ 1.700,00"
         parcelaPos.innerText = "R$ 2.080,00"
         parcelasPre.innerText = "36"
     });
     bt130k32x.addEventListener("click", function(){
         document.getElementById("plano").value = "recCy7SjEy4UVcNxI";
         valorCredito.innerText = "R$ 130.000,00"
         parcelaPre.innerText = "R$ 2.600,00"
         parcelaPos.innerText = "R$ 1.215,00"
         parcelasPre.innerText = "32"
     });
     bt130k24x.addEventListener("click", function(){
         document.getElementById("plano").value = "reclx8BXjkESzMy6Q";
         valorCredito.innerText = "R$ 130.000,00"
         parcelaPre.innerText = "R$ 2.300,00"
         parcelaPos.innerText = "R$ 2.470,00"
         parcelasPre.innerText = "24"
     });
     bt130k12x.addEventListener("click", function(){
         document.getElementById("plano").value = "recz31SamDPbt4qWc";
         valorCredito.innerText = "R$ 130.000,00"
         parcelaPre.innerText = "R$ 3.500,00"
         parcelaPos.innerText = "R$ 3.090,00"
         parcelasPre.innerText = "12"
     });




     document.getElementById("auto-comp-40k").addEventListener("click", function(){
        document.getElementById("credito-comp").innerText = "R$ 40.000,00";
         $("#comp-40k").delay(300).fadeIn(300);
         $("#comp-70k").fadeOut(300);
         $("#comp-85k").fadeOut(300);
         $("#comp-100k").fadeOut(300);
         $("#comp-130k").fadeOut(300);
    });
     document.getElementById("auto-comp-70k").addEventListener("click", function(){
        document.getElementById("credito-comp").innerText = "R$ 70.000,00";
        $("#comp-40k").fadeOut(300);
        $("#comp-70k").delay(300).fadeIn(300);
        $("#comp-85k").fadeOut(300);
        $("#comp-100k").fadeOut(300);
        $("#comp-130k").fadeOut(300);
    });
    document.getElementById("auto-comp-85k").addEventListener("click", function(){
        document.getElementById("credito-comp").innerText = "R$ 85.000,00";
        $("#comp-40k").fadeOut(300);
        $("#comp-70k").fadeOut(300);
        $("#comp-85k").delay(300).fadeIn(300);
        $("#comp-100k").fadeOut(300);
        $("#comp-130k").fadeOut(300);
    });
    document.getElementById("auto-comp-100k").addEventListener("click", function(){
        document.getElementById("credito-comp").innerText = "R$ 100.000,00";
        $("#comp-40k").fadeOut(300);
        $("#comp-70k").fadeOut(300);
        $("#comp-85k").fadeOut(300);
        $("#comp-100k").delay(300).fadeIn(300);
        $("#comp-130k").fadeOut(300);
    });
    document.getElementById("auto-comp-130k").addEventListener("click", function(){
        document.getElementById("credito-comp").innerText = "R$ 130.000,00";
        console.log(document.getElementById("credito-comp").innerText)
        $("#comp-40k").fadeOut(300);
        $("#comp-70k").fadeOut(300);
        $("#comp-85k").fadeOut(300);
        $("#comp-100k").fadeOut(300);
        $("#comp-130k").delay(300).fadeIn(300);
    });