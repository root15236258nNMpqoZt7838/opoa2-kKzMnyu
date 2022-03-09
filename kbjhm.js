import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { initializeAppCheck, ReCaptchaV3Provider } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app-check.js"
import { getFirestore, collection, addDoc, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js"
const firebaseConfig = {
    apiKey: "AIzaSyCP9o8MDlQEx6SgphJmnWGn49eOlnSAjp8",
    authDomain: "poupei-f3985.firebaseapp.com",
    projectId: "poupei-f3985",
    storageBucket: "poupei-f3985.appspot.com",
    messagingSenderId: "741966801523",
    appId: "1:741966801523:web:c4fc83b5ada167636f1806"
  };

const app = initializeApp(firebaseConfig);
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6Lcq_rAeAAAAAO7JeQsNischrEL5ACO4hV3ioOY0'),

  isTokenAutoRefreshEnabled: true
});
const button = document.getElementById("bt-simular");
const btrefazer = document.getElementById("simula-novo");
button.addEventListener("click", valida);
btrefazer.addEventListener("click", refazer);
function refazer() {
document.getElementById("resultado-simulador").classList.toggle('fade');
      setTimeout(function(){
      document.getElementById("resultado-simulador").style.display = "none";
      document.getElementById("simulador").style.display = "flex";
      document.getElementById("simulador").classList.toggle('fade');
      },600);
   };


function valida() {
document.getElementById("error-handler").style.display = "none";
//validacao do form
    if (document.getElementById("simulador-objetivos").value < 1) {
    document.getElementById("error-handler").textContent = "Você precisa selecionar um objetivo.";
    document.getElementById("error-handler").style.display = "block";
    } else if (document.getElementById("valor").value < 1) {
     document.getElementById("error-handler").textContent = "Você precisa informar um valor de objetivo.";
     document.getElementById("error-handler").style.display = "block";
    } else if (document.getElementById("parcela").value < 1) {
			document.getElementById("error-handler").textContent = "Você precisa informar um valor de parcela.";
      document.getElementById("error-handler").style.display = "block";
} else {
      calcular();      
      document.getElementById("simulador").classList.toggle('fade');
      setTimeout(function(){
      document.getElementById("simulador").style.display = "none";
      document.getElementById("resultado-simulador").style.display = "flex";
      document.getElementById("resultado-simulador").classList.toggle('fade');
      },600);
}};


function calcular() {
// DEFINE AS VARIAVEIS DA SIMULACAO
var ipendereco = document.getElementById("ipaddress").value;
 console.log(ipendereco);
var objetivo = document.getElementById("simulador-objetivos").value;
var valorObjetivo = document.getElementById("valor").value;
var valorParcela = document.getElementById("parcela").value;
var valorEntrada = document.getElementById("valor-presente").value;
  
// PREENCHE CAMPOS OCULTOS DO FORM
  const fieldObjetivo = document.getElementById("objetivo");
  const fieldvalorObjetivo = document.getElementById("valorObjetivo");
  const fieldvalorParcela = document.getElementById("valorParcela");
  const fieldvalorEntrada = document.getElementById("valorEntrada");
  const fieldvalorLance = document.getElementById("valorLance");
  const fieldPrazo = document.getElementById("prazo");
  const fieldtotalnoPrazo = document.getElementById("totalnoPrazo");
  
  if (objetivo === "1") {
  fieldObjetivo.value = "Imóvel";
} else if (objetivo === "2") {
  fieldObjetivo.value = "Carro/Moto"
} else {
  fieldObjetivo.value = "Outra Coisa"
}
console.log(fieldObjetivo);
  fieldvalorObjetivo.value = valorObjetivo.toString();
  fieldvalorParcela.value = valorParcela.toString();
  fieldvalorEntrada.value = valorEntrada.toString();
  
// TRANSFORMA VARIAVEIS EM NUMEROS
valorObjetivo = valorObjetivo.replace(/\,/g,''); 
valorObjetivo = valorObjetivo.replace(/\./g,'');
valorObjetivo = parseInt(valorObjetivo,10);
valorObjetivo = valorObjetivo / 100;
console.log("Valor do Bem: ", valorObjetivo);
valorParcela = valorParcela.replace(/\,/g,'');
valorParcela = valorParcela.replace(/\./g,'');
valorParcela = parseInt(valorParcela,10);
valorParcela = valorParcela / 100;
console.log("Parcela: ", valorParcela);
if (valorEntrada == "") {
valorEntrada = 0;
}else{
valorEntrada = valorEntrada.replace(/\,/g,'');
valorEntrada = valorEntrada.replace(/\./g,'');
valorEntrada = parseInt(valorEntrada,10);
valorEntrada = valorEntrada / 100;
};
console.log ("Entrada: ", valorEntrada);
//DEFINE PORCENTAGEM NECESSARIA
if (objetivo === "2" && valorObjetivo < 110000) {
    var taxaLance = (valorObjetivo - 20000) / 566666.67 + 24/100;
    taxaLance = Math.round(taxaLance * 100) / 100
    
    } else if (objetivo === "3") {
    var taxaLance = 1;
    } else {
    var taxaLance = 0.4;
    }
console.log ("% de Lance: ", taxaLance);
//DEFINE O VALOR DO LANCE
var valorLance = valorObjetivo * taxaLance;
console.log ("Valor do Lance: ", valorLance);
  
  var lanceEmail = parseInt(valorLance);
let dollarUS2 = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    useGrouping: true,
});
lanceEmail = dollarUS2.format(lanceEmail);
  
 fieldvalorLance.value = lanceEmail.toString();
  
//DEFINE O RENDIMENTO
var rendimentoMensal = 0.0085;
console.log ("Rendimento Mensal: ", rendimentoMensal);
//DEFINE O PRAZO MAXIMO
var prazoMaximo = Math.round(valorLance/valorParcela);
console.log ("Prazo Máximo: ", prazoMaximo);
var totalMaximo =  ((valorEntrada * (Math.pow(1 + rendimentoMensal, prazoMaximo)))) + ((valorParcela * (Math.pow(1 + rendimentoMensal, prazoMaximo) - 1)) / rendimentoMensal);
totalMaximo = Math.round(totalMaximo);
console.log ("Total no Prazo Máximo: ", totalMaximo);
//CALCULA O PRAZO REAL
var prazoReal = prazoMaximo;
var totalReal = totalMaximo;
if (totalReal > valorLance){
   do {
   	prazoReal = prazoReal - 1
    totalReal =  ((valorEntrada * (Math.pow(1 + rendimentoMensal, prazoReal)))) + ((valorParcela * (Math.pow(1 + rendimentoMensal, prazoReal) - 1)) / rendimentoMensal);
}
while (totalReal > valorLance);
};
prazoReal = prazoReal + 1;
if (prazoReal < 0){
prazoReal = 1;
}
console.log("Prazo real: ", prazoReal);
  
  fieldPrazo.value = prazoReal.toString();
  
//CALCULA O VALOR ACUMULADO NO PRAZO
totalReal =  ((valorEntrada * (Math.pow(1 + rendimentoMensal, prazoReal)))) + ((valorParcela * (Math.pow(1 + rendimentoMensal, prazoReal) - 1)) / rendimentoMensal);
console.log("Total no Prazo Real: ", totalReal);
  
  var totalEmail = dollarUS2.format(totalReal);
  fieldtotalnoPrazo.value = totalEmail;
  
//MOSTRA O RESULTADO DA SIMULACAO
document.getElementById("step-02").style.display = "flex";
var txtParcela = document.getElementById("parcela").value;
var txtEntrada = document.getElementById("valor-presente").value;
if (valorEntrada > 0) {
document.getElementById("step-01").innerHTML = '<p class="txt-step"><span class="text-span-10">COMECE HOJE COM OS R$'+txtEntrada+'</span> QUE VOCÊ JÁ TEM E <span class="text-span-11">PAGUE SUAS PARCELAS DE </span><span id="valor-parcela" class="text-span-14">R$'+txtParcela+'</span></p>'
} else {
document.getElementById("step-01").innerHTML = '<p class="txt-step"><span class="text-span-10">COMECE HOJE CRIANDO SUA CONTA</span> E <span class="text-span-11">PAGUE SUAS PARCELAS DE </span><span id="valor-parcela" class="text-span-14">R$'+txtParcela+'</span></p>'
}
document.getElementById("step-03").innerHTML = '<p class="txt-step">ESTIMAMOS QUE <span style="color:#f9c840">EM NO<br>MÁXIMO '+prazoReal+' MESES</span> você já poderá <span style="color:#f9c840">conquistar seu objetivo com o<br>Consórcio</span></p>'
if (objetivo === "1") {
document.getElementById("step-04").innerHTML = '<p class="txt-step">AI É <span style="color:#f9c840">VOCÊ BONITO NA FOTO NO SEU</span> <span style="font-size:20px;">🏠</span> <span style="color:#f9c840">NOVO PAGANDO AS PARCELAS do SEU consórcio</span> ATÉ <br>A QUITAÇÃO!</p>'
} else if (objetivo === "3"){
document.getElementById("step-03").innerHTML = '<p class="txt-step">ESTIMAMOS QUE <span style="color:#f9c840">EM NO<br>MÁXIMO '+prazoReal+' MESES</span> você já poderá <span style="color:#f9c840">conquistar seu objetivo</span></p>'
document.getElementById("step-04").innerHTML = '<p class="txt-step">AI É <span style="color:#f9c840">VOCÊ BONITO NA FOTO COM</span> <span style="font-size:20px;">💰</span> <span style="color:#f9c840">NA MÃO PARA</span> CONQUISTAR SEU OBJETIVO!</p>'
document.getElementById("step-02").style.display = "none";
} else {
document.getElementById("step-04").innerHTML = '<p class="txt-step">AI É <span class="text-span-23">você BONITO NA FOTO COM SEU</span> <span class="text-span-22">🚗</span> <span class="text-span-25">NOVO PAGANDO AS PARCELAS do SEU consórcio</span> ATÉ <br>A QUITAÇÃO!</p>'
}
const db = getFirestore();
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = dd + '/' + mm + '/' + yyyy;

	writeDoc();
async function writeDoc() {
		const docRef = await addDoc(collection(db, "simulacoes"), {
  	Objetivo: objetivo,
    ValorObjetivo: valorObjetivo,
  	ValorLance: valorLance,
  	ValorParcela: valorParcela,
  	ValorEntrada: valorEntrada,
    PrazoInformado: prazoReal,
    TotalNoPrazo: Math.round(totalReal),
  	ipAddress: ipendereco,
    DataSimulacao: today
  });
  console.log("Document written with ID: ", docRef.id);
}
	const salvaSim = document.getElementById("bt-salva-sim");

salvaSim.addEventListener ("click", salvaSimula);

function salvaSimula() {
const usrName = document.getElementById("salva-nome").value;
const usrMail = document.getElementById("salva-mail").value;

console.log(usrName, usrMail);

writeSave();
async function writeSave() {
		const docRef2 = await addDoc(collection(db, "simulacoes-salvas"), {
  	Nome: usrName,
    Email: usrMail,
    Objetivo: objetivo,
    ValorObjetivo: valorObjetivo,
  	ValorLance: valorLance,
  	ValorParcela: valorParcela,
  	ValorEntrada: valorEntrada,
    PrazoInformado: prazoReal,
    TotalNoPrazo: Math.round(totalReal),
  	ipAddress: ipendereco,
    DataSimulacao: today
  });
}
}
}
