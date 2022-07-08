
let objId = "";
async function loadObjectives(uid) {
    const querySnapshot = async () => await getDocs(collection(db, "users/" + uid + "/objetivos"));
    querySnapshot.forEach(doc => {
    const nomeObjetivo = doc.get('nomeobjetivo');
    const icone = doc.get('icone');
    const valorObjetivo = doc.get('valorobjetivo');
    const saldo = doc.get('saldototal');
    const depositos = doc.get('saldodepositos');
    const recompensas = doc.get('saldorecompensas');
    let pctDepId = doc.id+"progDep"
    let pctRecId = doc.id+"progRec"
    let saldoTotal = 'R$'+saldo.toLocaleString('pt-br', {style: 'decimal', minimumFractionDigits: 2})
    let pctDepositos = ( depositos / valorObjetivo ) * 100;
    let pctRecompensas = ( recompensas / valorObjetivo) *100;

    const objectiveCard = `<div id=${doc.id} class="single-objective-card first">
      <div class="objective-card-heading">
        <div class="objective-icon"><img
            src="${icone}"
            loading="eager" id="icon-single" alt="" class="single-objetivo-card-icon"></div>
        <div id="nomeObj" class="objetivo-card-heading">${nomeObjetivo}</div>
      </div>
      <div class="objective-card-info">
        <div class="objective-card-saldo">${saldoTotal}</div>
        <div class="text-block-3">guardados</div>
        <div class="objective-card-progress-wrapper">
          <div class="objective-card-progress-depositos" id="${pctDepId}"></div>
          <div class="objective-card-progress-rewards" id="${pctRecId}"></div>
        </div>
      </div>
    </div>`
    $('.single-objectives-wrapper').append(objectiveCard);

    $('#'+pctDepId).css('width', pctDepositos+'%');
    $('#'+pctRecId).css('width', pctRecompensas+'%');

    });

    $('.single-objectives-wrapper').append('<div class="spacer"></div>');

    $('.single-objective-card').on('click', (event) => {
      let id = event.currentTarget.id;
      $('.home-wrapper').fadeOut(300);
      $('.single-objective-wrapper').delay(300).fadeIn(300);
      $('.single-objective-loader').show();
      $('.single-objective-content').hide();
      objId = id;
      loadObjData(id)
    });

    $('.home-loader').fadeOut(150);
    $('.home-objectives').delay(150).fadeIn(150);

   }

  let objetivo = ""
   async function loadObjData(id) {

    const querySnapshot = async () => await getDoc(doc(db, "users/"+uid+"/objetivos", id));
    objetivo = querySnapshot.data();
    const nomeObjetivo = objetivo.nomeobjetivo;
    $('.nome-single-objetivo').text(nomeObjetivo);
    const icone = objetivo.icone;
    $('.single-objective-icon').attr("src", icone);
    const valorObjetivo = 'R$'+objetivo.valorobjetivo.toLocaleString('pt-br', {style: 'decimal', minimumFractionDigits: 2});
    $('.valor-objetivo-single').text(valorObjetivo);
    const saldo = 'R$'+objetivo.saldototal.toLocaleString('pt-br', {style: 'decimal', minimumFractionDigits: 2});
    $('.saldo-objetivo-single').text(saldo);
    const depositos = objetivo.saldodepositos;
    const recompensas = objetivo.saldorecompensas;
    let pctDepositos = ( depositos / valorObjetivo ) * 100;
    let pctRecompensas = ( recompensas / valorObjetivo) *100;
    $('.single-progress-depositos').css('width', pctDepositos+'%');
    $('single-progress-recompensas').css('width', pctRecompensas+'%');
    const proxDeposito = objetivo.proximodeposito;
    const valorDeposito = 'R$'+objetivo.valordeposito.toLocaleString('pt-br', {style: 'decimal', minimumFractionDigits: 2});
    $('.objective-valor-deposito').text(valorDeposito);
    $('.proximo-deposito').text(proxDeposito);


       $('.single-objective-loader').fadeOut(300);
        $('.single-objective-content').delay(300).fadeIn(300);
}
document.getElementById('home-wrapper').style.height = String(window.innerHeight) + 'px';
document.getElementById('home-wrapper').style.maxHeight = String(window.innerHeight) + 'px';
$('#signOut').click(() => {
    signOut(auth).then(() => {
    window.location.href = "./"
    }).catch((error) => {
    // An error happened.
    });
});
