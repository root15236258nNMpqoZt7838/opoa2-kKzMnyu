$('#prize-block-1').animate({opacity: '0'}, 1 );
$('#prize-block-2').animate({opacity: '0'}, 1 );
$('#prize-block-3').animate({opacity: '0'}, 1 );

let fullReward = 100;
let bigReward = fullReward*0.55;
let mediumReward = fullReward*0.35;
let smallReward = fullReward*0.1;
let reward = "";
function getRandom(lista) {
const randomPosition = Math.floor(Math.random() * ( lista.length ));
return lista[randomPosition];
}

const smallPrize = '<lottie-player src="https://uploads-ssl.webflow.com/62798bc44b0fc710d9b5ad11/628817a40f043659ebb57945_small-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>'
const mediumPrize = '<lottie-player src="https://uploads-ssl.webflow.com/62798bc44b0fc710d9b5ad11/628817a40f043635efb57944_medium-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>'
const bigPrize = '<lottie-player src="https://uploads-ssl.webflow.com/62798bc44b0fc710d9b5ad11/628817a40f04367342b57943_big-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>'

const prize = [
  smallPrize,
  mediumPrize,
  bigPrize
];

$('#trigger1').click(() => {
    $("#trigger1").fadeOut(1);
    $("#trigger2").fadeOut(1);
    $("#trigger3").fadeOut(1);
    reward = getRandom(prize);
    document.getElementById('reward').innerHTML = "R$" + reward;
    $('#chest-info').fadeOut(300);
    $("#prize-1").append(reward);
    $('#prize-2').animate({opacity: '0.5'}, 300 );
    $('#prize-3').animate({opacity: '0.5'}, 300 );
    $('#key-holder').animate({opacity: '0'}, 300 );
    if (reward == '<lottie-player src="https://uploads-ssl.webflow.com/62798bc44b0fc710d9b5ad11/628817a40f043659ebb57945_small-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>') {
        
        $('#prize-block-1').append('<div class="text-block-3">VOCÊ GANHOU<br><br><span class="text-span">R$'+Math.round(smallReward)+'</span></div>');
        $('#prize-block-1').delay(1000).animate({opacity: '1'}, 500 );

        setTimeout(function(){
            $("#prize-2").append('<lottie-player src="https://uploads-ssl.webflow.com/62798bc44b0fc710d9b5ad11/628817a40f043635efb57944_medium-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>');
            $("#prize-3").append('<lottie-player src="https://uploads-ssl.webflow.com/62798bc44b0fc710d9b5ad11/628817a40f04367342b57943_big-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>');
            $('#prize-block-2').append('<div class="text-block-3"><span class="text-span">R$'+Math.round(mediumReward)+'</span></div>');
            $('#prize-block-3').append('<div class="text-block-3"><span class="text-span">R$'+Math.round(bigReward)+'</span></div>');
            $('#prize-block-2').delay(1000).animate({opacity: '1'}, 500 );
            $('#prize-block-3').delay(1000).animate({opacity: '1'}, 500 );
            $('#result').fadeIn(300);
        },2000);

    } else if (reward == '<lottie-player src="https://uploads-ssl.webflow.com/62798bc44b0fc710d9b5ad11/628817a40f043635efb57944_medium-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>') {
        
        $('#prize-block-1').append('<div class="text-block-3">VOCÊ GANHOU<br><br><span class="text-span">R$'+Math.round(mediumReward)+'</span></div>');
        $('#prize-block-1').delay(1000).animate({opacity: '1'}, 500 );

        setTimeout(function(){
            $("#prize-2").append('<lottie-player src="https://uploads-ssl.webflow.com/62798bc44b0fc710d9b5ad11/628817a40f043659ebb57945_small-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>');
            $("#prize-3").append('<lottie-player src="https://uploads-ssl.webflow.com/62798bc44b0fc710d9b5ad11/628817a40f04367342b57943_big-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>');
            $('#prize-block-2').append('<div class="text-block-3"><span class="text-span">R$'+Math.round(smallReward)+'</span></div>');
            $('#prize-block-3').append('<div class="text-block-3"><span class="text-span">R$'+Math.round(bigReward)+'</span></div>');
            $('#prize-block-2').delay(1000).animate({opacity: '1'}, 500 );
            $('#prize-block-3').delay(1000).animate({opacity: '1'}, 500 );
            $('#result').fadeIn(300);
        },2000);

    } else if (reward == '<lottie-player src="https://uploads-ssl.webflow.com/62798bc44b0fc710d9b5ad11/628817a40f04367342b57943_big-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>' ) {
        
        $('#prize-block-1').append('<div class="text-block-3">VOCÊ GANHOU<br><br><span class="text-span">R$'+Math.round(bigReward)+'</span></div>');
        $('#prize-block-1').delay(1000).animate({opacity: '1'}, 500 );

        setTimeout(function(){
            $("#prize-2").append('<lottie-player src="https://uploads-ssl.webflow.com/62798bc44b0fc710d9b5ad11/628817a40f043635efb57944_medium-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>');
            $("#prize-3").append('<lottie-player src="https://uploads-ssl.webflow.com/62798bc44b0fc710d9b5ad11/628817a40f043659ebb57945_small-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>');
            $('#prize-block-2').append('<div class="text-block-3"><span class="text-span">R$'+Math.round(mediumReward)+'</span></div>');
            $('#prize-block-3').append('<div class="text-block-3"><span class="text-span">R$'+Math.round(smallReward)+'</span></div>');
            $('#prize-block-2').delay(1000).animate({opacity: '1'}, 500 );
            $('#prize-block-3').delay(1000).animate({opacity: '1'}, 500 );
            $('#result').fadeIn(300);
        },2000);

    }
});

$('#trigger2').click(() => {
    $("#trigger1").fadeOut(1);
    $("#trigger2").fadeOut(1);
    $("#trigger3").fadeOut(1);
    reward = getRandom(prize);
    document.getElementById('reward').innerHTML = "R$" + reward;
    $('#chest-info').fadeOut(300);
    $("#prize-2").append(reward);
    $('#prize-1').animate({opacity: '0.5'}, 300 );
    $('#prize-3').animate({opacity: '0.5'}, 300 );
    $('#key-holder').animate({opacity: '0'}, 300 );
    if (reward == '<lottie-player src="https://uploads-ssl.webflow.com/62798bc44b0fc710d9b5ad11/628817a40f043659ebb57945_small-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>') {
        
        $('#prize-block-2').append('<div class="text-block-3">VOCÊ GANHOU<br><br><span class="text-span">R$'+Math.round(smallReward)+'</span></div>');
        $('#prize-block-2').delay(1000).animate({opacity: '1'}, 500 );

        setTimeout(function(){
            $("#prize-1").append('<lottie-player src="https://uploads-ssl.webflow.com/62798bc44b0fc710d9b5ad11/628817a40f043635efb57944_medium-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>');
            $("#prize-3").append('<lottie-player src="https://uploads-ssl.webflow.com/62798bc44b0fc710d9b5ad11/628817a40f04367342b57943_big-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>');
            $('#prize-block-1').append('<div class="text-block-3"><span class="text-span">R$'+Math.round(mediumReward)+'</span></div>');
            $('#prize-block-3').append('<div class="text-block-3"><span class="text-span">R$'+Math.round(bigReward)+'</span></div>');
            $('#prize-block-1').delay(1000).animate({opacity: '1'}, 500 );
            $('#prize-block-3').delay(1000).animate({opacity: '1'}, 500 );
            $('#result').fadeIn(300);
        },2000);

    } else if (reward == '<lottie-player src="https://uploads-ssl.webflow.com/62798bc44b0fc710d9b5ad11/628817a40f043635efb57944_medium-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>') {
        
        $('#prize-block-2').append('<div class="text-block-3">VOCÊ GANHOU<br><br><span class="text-span">R$'+Math.round(mediumReward)+'</span></div>');
        $('#prize-block-2').delay(1000).animate({opacity: '1'}, 500 );

        setTimeout(function(){
            $("#prize-1").append('<lottie-player src="https://uploads-ssl.webflow.com/62798bc44b0fc710d9b5ad11/628817a40f043659ebb57945_small-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>');
            $("#prize-3").append('<lottie-player src="https://uploads-ssl.webflow.com/62798bc44b0fc710d9b5ad11/628817a40f04367342b57943_big-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>');
            $('#prize-block-1').append('<div class="text-block-3"><span class="text-span">R$'+Math.round(smallReward)+'</span></div>');
            $('#prize-block-3').append('<div class="text-block-3"><span class="text-span">R$'+Math.round(bigReward)+'</span></div>');
            $('#prize-block-1').delay(1000).animate({opacity: '1'}, 500 );
            $('#prize-block-3').delay(1000).animate({opacity: '1'}, 500 );
            $('#result').fadeIn(300);
        },2000);

    } else if (reward == '<lottie-player src="https://uploads-ssl.webflow.com/62798bc44b0fc710d9b5ad11/628817a40f04367342b57943_big-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>' ) {
        
        $('#prize-block-2').append('<div class="text-block-3">VOCÊ GANHOU<br><br><span class="text-span">R$'+Math.round(bigReward)+'</span></div>');
        $('#prize-block-2').delay(1000).animate({opacity: '1'}, 500 );

        setTimeout(function(){
            $("#prize-1").append('<lottie-player src="https://uploads-ssl.webflow.com/62798bc44b0fc710d9b5ad11/628817a40f043635efb57944_medium-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>');
            $("#prize-3").append('<lottie-player src="https://uploads-ssl.webflow.com/62798bc44b0fc710d9b5ad11/628817a40f043659ebb57945_small-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>');
            $('#prize-block-1').append('<div class="text-block-3"><span class="text-span">R$'+Math.round(mediumReward)+'</span></div>');
            $('#prize-block-3').append('<div class="text-block-3"><span class="text-span">R$'+Math.round(smallReward)+'</span></div>');
            $('#prize-block-1').delay(1000).animate({opacity: '1'}, 500 );
            $('#prize-block-3').delay(1000).animate({opacity: '1'}, 500 );
            $('#result').fadeIn(300);
        },2000);

    }
});

$('#trigger3').click(() => {
    $("#trigger1").fadeOut(1);
    $("#trigger2").fadeOut(1);
    $("#trigger3").fadeOut(1);
    reward = getRandom(prize);
    document.getElementById('reward').innerHTML = "R$" + reward;
    $('#chest-info').fadeOut(300);
    $("#prize-3").append(reward);
    $('#prize-1').animate({opacity: '0.5'}, 300 );
    $('#prize-2').animate({opacity: '0.5'}, 300 );
    $('#key-holder').animate({opacity: '0'}, 300 );
    if (reward == '<lottie-player src="https://uploads-ssl.webflow.com/62798bc44b0fc710d9b5ad11/628817a40f043659ebb57945_small-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>') {
        
        $('#prize-block-3').append('<div class="text-block-3">VOCÊ GANHOU<br><br><span class="text-span">R$'+Math.round(smallReward)+'</span></div>');
        $('#prize-block-3').delay(1000).animate({opacity: '1'}, 500 );

        setTimeout(function(){
            $("#prize-2").append('<lottie-player src="https://uploads-ssl.webflow.com/62798bc44b0fc710d9b5ad11/628817a40f043635efb57944_medium-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>');
            $("#prize-1").append('<lottie-player src="https://uploads-ssl.webflow.com/62798bc44b0fc710d9b5ad11/628817a40f04367342b57943_big-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>');
            $('#prize-block-2').append('<div class="text-block-3"><span class="text-span">R$'+Math.round(mediumReward)+'</span></div>');
            $('#prize-block-1').append('<div class="text-block-3"><span class="text-span">R$'+Math.round(bigReward)+'</span></div>');
            $('#prize-block-2').delay(1000).animate({opacity: '1'}, 500 );
            $('#prize-block-1').delay(1000).animate({opacity: '1'}, 500 );
            $('#result').fadeIn(300);
        },2000);

    } else if (reward == '<lottie-player src="https://uploads-ssl.webflow.com/62798bc44b0fc710d9b5ad11/628817a40f043635efb57944_medium-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>') {
        
        $('#prize-block-3').append('<div class="text-block-3">VOCÊ GANHOU<br><br><span class="text-span">R$'+Math.round(mediumReward)+'</span></div>');
        $('#prize-block-3').delay(1000).animate({opacity: '1'}, 500 );

        setTimeout(function(){
            $("#prize-2").append('<lottie-player src="https://uploads-ssl.webflow.com/62798bc44b0fc710d9b5ad11/628817a40f043659ebb57945_small-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>');
            $("#prize-1").append('<lottie-player src="https://uploads-ssl.webflow.com/62798bc44b0fc710d9b5ad11/628817a40f04367342b57943_big-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>');
            $('#prize-block-2').append('<div class="text-block-3"><span class="text-span">R$'+Math.round(smallReward)+'</span></div>');
            $('#prize-block-1').append('<div class="text-block-3"><span class="text-span">R$'+Math.round(bigReward)+'</span></div>');
            $('#prize-block-2').delay(1000).animate({opacity: '1'}, 500 );
            $('#prize-block-1').delay(1000).animate({opacity: '1'}, 500 );
            $('#result').fadeIn(300);
        },2000);

    } else if (reward == '<lottie-player src="https://uploads-ssl.webflow.com/62798bc44b0fc710d9b5ad11/628817a40f04367342b57943_big-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>' ) {
        
        $('#prize-block-3').append('<div class="text-block-3">VOCÊ GANHOU<br><br><span class="text-span">R$'+Math.round(bigReward)+'</span></div>');
        $('#prize-block-3').delay(1000).animate({opacity: '1'}, 500 );

        setTimeout(function(){
            $("#prize-2").append('<lottie-player src="https://uploads-ssl.webflow.com/62798bc44b0fc710d9b5ad11/628817a40f043635efb57944_medium-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>');
            $("#prize-1").append('<lottie-player src="https://uploads-ssl.webflow.com/62798bc44b0fc710d9b5ad11/628817a40f043659ebb57945_small-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>');
            $('#prize-block-2').append('<div class="text-block-3"><span class="text-span">R$'+Math.round(mediumReward)+'</span></div>');
            $('#prize-block-1').append('<div class="text-block-3"><span class="text-span">R$'+Math.round(smallReward)+'</span></div>');
            $('#prize-block-2').delay(1000).animate({opacity: '1'}, 500 );
            $('#prize-block-1').delay(1000).animate({opacity: '1'}, 500 );
            $('#result').fadeIn(300);
        },2000);

    }
});
