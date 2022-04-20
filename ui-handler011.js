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


    // lead-planoS 40K
    const bt40k36x = document.getElementById("40k36x");
    const bt40k32x = document.getElementById("40k32x");
    const bt40k24x = document.getElementById("40k24x");
    const bt40k12x = document.getElementById("40k12x");
    const valorCredito = document.getElementById("valor-credito");
    const parcelaPre = document.getElementById("valor-parcela-pre");
    const parcelaPos = document.getElementById("valor-parcela-pos");
    const parcelasPre = document.getElementById("parcelas-pre");
    const prazoTotal = document.getElementById("prazo-total");
    const totalPago = document.getElementById("total-pago")

    bt40k36x.addEventListener("click", function(){
        document.getElementById("lead-plano").value = "rec9AbjvTQVs4FqVi";
        valorCredito.innerText = "R$40.000,00"
        parcelaPre.innerText = "R$510"
        parcelaPos.innerText = "R$680"
        parcelasPre.innerText = "36"
        totalPago.innerText = "R$51.000,00"
        prazoTotal.innerText = "84 MESES"

    });
    bt40k32x.addEventListener("click", function(){
        document.getElementById("lead-plano").value = "recHW5QEyrzLub02d";
        valorCredito.innerText = "R$40.000,00"
        parcelaPre.innerText = "R$820"
        parcelaPos.innerText = "R$370"
        parcelasPre.innerText = "32"
        totalPago.innerText = "R$44.000,00"
        prazoTotal.innerText = "80 MESES"
    });
    bt40k24x.addEventListener("click", function(){
        document.getElementById("lead-plano").value = "recyfiVLVtjeCDG5W";
        valorCredito.innerText = "R$40.000,00"
        parcelaPre.innerText = "R$700"
        parcelaPos.innerText = "R$780"
        parcelasPre.innerText = "24"
        totalPago.innerText = "R$54.240,00"
        prazoTotal.innerText = "72 MESES"
    });
    bt40k12x.addEventListener("click", function(){
        document.getElementById("lead-plano").value = "rectBdF1rAGboSOux";
        valorCredito.innerText = "R$40.000,00"
        parcelaPre.innerText = "R$1.080"
        parcelaPos.innerText = "R$970"
        parcelasPre.innerText = "12"
        totalPago.innerText = "R$59.520,00"
        prazoTotal.innerText = "60 MESES"
    });

    // lead-planoS 55K
    const bt55k36x = document.getElementById("55k36x");
    const bt55k32x = document.getElementById("55k32x");
    const bt55k24x = document.getElementById("55k24x");
    const bt55k12x = document.getElementById("55k12x");

    bt55k36x.addEventListener("click", function(){
        document.getElementById("lead-plano").value = "recdPD11lWyjgg2A3";
        valorCredito.innerText = "R$55.000,00"
        parcelaPre.innerText = "R$710"
        parcelaPos.innerText = "R$920"
        parcelasPre.innerText = "36"
        totalPago.innerText = "R$69.720,00"
        prazoTotal.innerText = "84 MESES"

    });
    bt55k32x.addEventListener("click", function(){
        document.getElementById("lead-plano").value = "reccsNVXE1MQxkOKo";
        valorCredito.innerText = "R$55.000,00"
        parcelaPre.innerText = "R$1.140"
        parcelaPos.innerText = "R$510"
        parcelasPre.innerText = "32"
        totalPago.innerText = "R$60.960,00"
        prazoTotal.innerText = "80 MESES"
    });
    bt55k24x.addEventListener("click", function(){
        document.getElementById("lead-plano").value = "recjBSovWzhsvFjtQ";
        valorCredito.innerText = "R$55.000,00"
        parcelaPre.innerText = "R$950"
        parcelaPos.innerText = "R$1.080"
        parcelasPre.innerText = "24"
        totalPago.innerText = "R$74.640,00"
        prazoTotal.innerText = "72 MESES"
    });
    bt55k12x.addEventListener("click", function(){
        document.getElementById("lead-plano").value = "recJlVRQBvkls2lye";
        valorCredito.innerText = "R$55.000,00"
        parcelaPre.innerText = "R$1.500"
        parcelaPos.innerText = "R$1.330"
        parcelasPre.innerText = "12"
        totalPago.innerText = "R$81.840,00"
        prazoTotal.innerText = "60 MESES"
    });

    // lead-planoS 70K
    const bt70k36x = document.getElementById("70k36x");
    const bt70k32x = document.getElementById("70k32x");
    const bt70k24x = document.getElementById("70k24x");
    const bt70k12x = document.getElementById("70k12x");
    bt70k36x.addEventListener("click", function(){
        document.getElementById("lead-plano").value = "recjiVE9528AWVZpJ";
        valorCredito.innerText = "R$70.000,00"
        parcelaPre.innerText = "R$910"
        parcelaPos.innerText = "R$1.170"
        parcelasPre.innerText = "36"
        totalPago.innerText = "R$88.920,00"
        prazoTotal.innerText = "84 MESES"
    });
    bt70k32x.addEventListener("click", function(){
        document.getElementById("lead-plano").value = "recGGH9wC3PZCw53v";
        valorCredito.innerText = "R$70.000,00"
        parcelaPre.innerText = "R$1.480"
        parcelaPos.innerText = "R$620"
        parcelasPre.innerText = "32"
        totalPago.innerText = "R$77.120,00"
        prazoTotal.innerText = "80 MESES"
    });
    bt70k24x.addEventListener("click", function(){
        document.getElementById("lead-plano").value = "recNtqNVqpb62gZFE";
        valorCredito.innerText = "R$70.000,00"
        parcelaPre.innerText = "R$1.250"
        parcelaPos.innerText = "R$1.360"
        parcelasPre.innerText = "24"
        totalPago.innerText = "R$95.280,00"
        prazoTotal.innerText = "72 MESES"
    });
    bt70k12x.addEventListener("click", function(){
        document.getElementById("lead-plano").value = "recjq88qNi7PFF6pv";
        valorCredito.innerText = "R$70.000,00"
        parcelaPre.innerText = "R$1.920"
        parcelaPos.innerText = "R$1.700"
        parcelasPre.innerText = "12"
        totalPago.innerText = "R$104.640,00"
        prazoTotal.innerText = "60 MESES"
    });

        // lead-planoS 85K
        const bt85k36x = document.getElementById("85k36x");
        const bt85k32x = document.getElementById("85k32x");
        const bt85k24x = document.getElementById("85k24x");
        const bt85k12x = document.getElementById("85k12x");
        bt85k36x.addEventListener("click", function(){
            document.getElementById("lead-plano").value = "rec0EBAR3pTM5VzwN";
            valorCredito.innerText = "R$85.000,00"
            parcelaPre.innerText = "R$1.110"
            parcelaPos.innerText = "R$1.420"
            parcelasPre.innerText = "36"
            totalPago.innerText = "R$108.120,00"
        prazoTotal.innerText = "84 MESES"
        });
        bt85k32x.addEventListener("click", function(){
            document.getElementById("lead-plano").value = "recWJwsvb9wzMmDdf";
            valorCredito.innerText = "R$85.000,00"
            parcelaPre.innerText = "R$1.790"
            parcelaPos.innerText = "R$770"
            parcelasPre.innerText = "32"
            totalPago.innerText = "R$94.240,00"
        prazoTotal.innerText = "80 MESES"
        });
        bt85k24x.addEventListener("click", function(){
            document.getElementById("lead-plano").value = "rec2bsLKl6aEBcaSN";
            valorCredito.innerText = "R$85.000,00"
            parcelaPre.innerText = "R$1.510"
            parcelaPos.innerText = "R$1.660"
            parcelasPre.innerText = "24"
            totalPago.innerText = "R$115.920,00"
        prazoTotal.innerText = "72 MESES"
        });
        bt85k12x.addEventListener("click", function(){
            document.getElementById("lead-plano").value = "recdTOYxq5mTbOK4r";
            valorCredito.innerText = "R$85.000,00"
            parcelaPre.innerText = "R$2.350"
            parcelaPos.innerText = "R$2.060"
            parcelasPre.innerText = "12"
            totalPago.innerText = "R$127.080,00"
        prazoTotal.innerText = "60 MESES"
        });

     // lead-planoS 100K
     const bt100k36x = document.getElementById("100k36x");
     const bt100k32x = document.getElementById("100k32x");
     const bt100k24x = document.getElementById("100k24x");
     const bt100k12x = document.getElementById("100k12x");
     bt100k36x.addEventListener("click", function(){
         document.getElementById("lead-plano").value = "rectcxuv4k1rPYuLN";
         valorCredito.innerText = "R$100.000,00"
         parcelaPre.innerText = "R$1.310"
         parcelaPos.innerText = "R$1.670"
         parcelasPre.innerText = "36"
         totalPago.innerText = "R$127.320,00"
        prazoTotal.innerText = "84 MESES"
     });
     bt100k32x.addEventListener("click", function(){
         document.getElementById("lead-plano").value = "recLy1oGmSkTL25Wj";
         valorCredito.innerText = "R$100.000,00"
         parcelaPre.innerText = "R$2.100"
         parcelaPos.innerText = "R$920"
         parcelasPre.innerText = "32"
         totalPago.innerText = "R$111.360,00"
        prazoTotal.innerText = "80 MESES"
     });
     bt100k24x.addEventListener("click", function(){
         document.getElementById("lead-plano").value = "recqFh44wffv4dpxK";
         valorCredito.innerText = "R$100.000,00"
         parcelaPre.innerText = "R$1.800"
         parcelaPos.innerText = "R$1.940"
         parcelasPre.innerText = "24"
         totalPago.innerText = "R$136.320,00"
        prazoTotal.innerText = "72 MESES"
     });
     bt100k12x.addEventListener("click", function(){
         document.getElementById("lead-plano").value = "recZ7xxrkI7Cl5yBl";
         valorCredito.innerText = "R$100.000,00"
         parcelaPre.innerText = "R$2.750"
         parcelaPos.innerText = "R$2.440"
         parcelasPre.innerText = "12"
         totalPago.innerText = "R$150.120,00"
        prazoTotal.innerText = "60 MESES"
     });

     // lead-planoS 130K
     const bt130k36x = document.getElementById("130k36x");
     const bt130k32x = document.getElementById("130k32x");
     const bt130k24x = document.getElementById("130k24x");
     const bt130k12x = document.getElementById("130k12x");
     bt130k36x.addEventListener("click", function(){

         document.getElementById("lead-plano").value = "reciewdL4Xt0ebYVQ";
         valorCredito.innerText = "R$130.000,00"
         parcelaPre.innerText = "R$1.710"
         parcelaPos.innerText = "R$2.170"
         parcelasPre.innerText = "36"
         totalPago.innerText = "R$165.720,00"
        prazoTotal.innerText = "84 MESES"
     });
     bt130k32x.addEventListener("click", function(){

         document.getElementById("lead-plano").value = "recCy7SjEy4UVcNxI";
         valorCredito.innerText = "R$130.000,00"
         parcelaPre.innerText = "R$2.750"
         parcelaPos.innerText = "R$1.180"
         parcelasPre.innerText = "32"
         totalPago.innerText = "R$144.640,00"
        prazoTotal.innerText = "80 MESES"
     });
     bt130k24x.addEventListener("click", function(){

         document.getElementById("lead-plano").value = "reclx8BXjkESzMy6Q";
         valorCredito.innerText = "R$130.000,00"
         parcelaPre.innerText = "R$2.350"
         parcelaPos.innerText = "R$2.520"
         parcelasPre.innerText = "24"
         totalPago.innerText = "R$177.360,00"
        prazoTotal.innerText = "72 MESES"
     });
     bt130k12x.addEventListener("click", function(){


         document.getElementById("lead-plano").value = "recz31SamDPbt4qWc";
         valorCredito.innerText = "R$130.000,00"
         parcelaPre.innerText = "R$3.600"
         parcelaPos.innerText = "R$3.170"
         parcelasPre.innerText = "12"
         totalPago.innerText = "R$195.360,00"
        prazoTotal.innerText = "60 MESES"
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