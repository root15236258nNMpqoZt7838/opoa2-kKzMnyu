
let objId = "";
async function loadObjectives(uid) {
    const querySnapshot = await getDocs(collection(db, "users/" + uid + "/objetivos"));
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

    const querySnapshot = await getDoc(doc(db, "users/"+uid+"/objetivos", id));
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
// SUBPAGES - EXTRATO / DEPÓSITOS / RESGATE

let modalIsOpen = false;

$('#extrato').click(async () => {
	const extratoSnap = await getDocs(collection(db, "users/"+uid+"/objetivos/"+objId+"/extrato"));
  if (modalIsOpen) {
  	$('.deposito-wrapper').hide();
    $('.resgate-wrapper').hide();
    $('.extrato-content').empty();
    $('#deposito').css('background-color', '#FFFFFF');
    $('#deposito-txt').css('color', '#C95DAB');
    $('#extrato').css('background-color', '#C95DAB');
    $('#extrato-txt').css('color', '#FFFFFF');
    $('#resgate').css('background-color', '#FFFFFF');
    $('#resgate-txt').css('color', '#C95DAB');
  } else {
  	modalIsOpen = true;
    $('#extrato').css('background-color', '#C95DAB');
    $('#extrato-txt').css('color', '#FFFFFF');
    $('.extrato-content').empty();
    $('.single-objective-subpage').animate({'min-height': '400px'}, 'fast');
  }

$('.so-saldo-depositos').text('R$'+objetivo.saldodepositos.toLocaleString('pt-br', {style: 'decimal', minimumFractionDigits: 2}))
$('.so-saldo-recompensas').text('R$'+objetivo.saldorecompensas.toLocaleString('pt-br', {style: 'decimal', minimumFractionDigits: 2}))

extratoSnap.forEach(doc => {
	let timestamp = doc.get('data');
 	let data = new Date(timestamp.seconds*1000);
    const dia = data.getDate();
    const mes = data.getMonth()+1;
    const ano = data.getFullYear();
    const date = dia+'/'+mes+'/'+ano
    const valor = doc.get('valor');
    const tipo = doc.get('tipo');
    const forma = doc.get('forma');
  
    const heading = '<div class="extrato-heading"><div class="extrato-heading-txt">'+tipo+' '+forma+'</div></div>'
    const item = '<div class="extrato-item"><div class="extrato-item-valor">R$'+valor.toLocaleString('pt-br', {style: 'decimal', minimumFractionDigits: 2})+'</div><div class="extrato-item-data">'+date+'</div></div>'
    $('.extrato-content').append(heading);
    $('.extrato-content').append(item);
    $('.extrato-wrapper').fadeIn(300);
  
});


});

$('#deposito').click(async () => {
    if (modalIsOpen) {
        $('.extrato-wrapper').fadeOut(300);
        $('.resgate-wrapper').fadeOut(300);
        $('.deposito-wrapper').delay(300).fadeIn(300);
        $('#deposito').css('background-color', '#C95DAB');
        $('#deposito-txt').css('color', '#FFFFFF');
        $('#extrato').css('background-color', '#FFFFFF');
        $('#extrato-txt').css('color', '#C95DAB');
        $('#resgate').css('background-color', '#FFFFFF');
        $('#resgate-txt').css('color', '#C95DAB');
    } else {
        $('.extrato-wrapper').hide();
        $('.resgate-wrapper').hide();
        $('.deposito-wrapper').show();
        $('#deposito').css('background-color', '#C95DAB');
        $('#deposito-txt').css('color', '#FFFFFF');
        $('.single-objective-subpage').animate({ 'min-height': '400px' }, 'fast');
        modalIsOpen = true;
    }
});


$('#resgate').click(async () => {
    if (modalIsOpen) {
        $('.extrato-wrapper').fadeOut(300);
        $('.deposito-wrapper').fadeOut(300);
        $('.resgate-wrapper').delay(300).fadeIn(300);
        $('#resgate').css('background-color', '#C95DAB');
        $('#resgate-txt').css('color', '#FFFFFF');
        $('#extrato').css('background-color', '#FFFFFF');
        $('#extrato-txt').css('color', '#C95DAB');
        $('#deposito').css('background-color', '#FFFFFF');
        $('#deposito-txt').css('color', '#C95DAB');
    } else {
        $('.extrato-wrapper').hide();
        $('.resgate-wrapper').show();
        $('.deposito-wrapper').hide();
        $('#resgate').css('background-color', '#C95DAB');
        $('#resgate-txt').css('color', '#FFFFFF');
        $('.single-objective-subpage').animate({ 'min-height': '400px' }, 'fast');
        modalIsOpen = true;
    }
});


$('.close-extrato').click(() => {
	modalIsOpen = false
  $('.deposito-wrapper').hide();
  $('.extrato-wrapper').hide();
  $('.resgate').hide();
  $('#deposito').css('background-color', '#FFFFFF');
  $('#deposito-txt').css('color', '#C95DAB');
  $('#extrato').css('background-color', '#FFFFFF');
	$('#extrato-txt').css('color', '#C95DAB');
  $('#resgate').css('background-color', '#FFFFFF');
  $('#resgate-txt').css('color', '#C95DAB');
	$('.single-objective-subpage').animate({'min-height': '0px'}, 'fast');
});
$('.objective-close-button').click(() => {
		modalIsOpen = false
	  $('.single-objective-wrapper').fadeOut(150);
	  $('.home-wrapper').delay(150).fadeIn(150);
	  $('.objective-content-wrapper').delay(200).hide();
	  $('.single-objective-subpage').css('min-height', '0px');
    $('.extrato-wrapper').hide();
    $('.deposito-wrapper').hide();
    $('#extrato').css('background-color', '#FFFFFF');
    $('#extrato-txt').css('color', '#C95DAB');
    $('#deposito').css('background-color', '#FFFFFF');
    $('#deposito-txt').css('color', '#C95DAB');
    $('#resgate').css('background-color', '#FFFFFF');
    $('#resgate-txt').css('color', '#C95DAB');
});
