$('#prize-block-1').animate({opacity: '0'}, 1 );
$('#prize-block-2').animate({opacity: '0'}, 1 );
$('#prize-block-3').animate({opacity: '0'}, 1 );

let fullPrize = 100;
let reward = "";
function getRandom(lista) {
const randomPosition = Math.floor(Math.random() * ( lista.length ));
return lista[randomPosition];
}

const smallPrize = '<lottie-player src="https://uploads-ssl.webflow.com/628239cfa6d9f0b6479c6b41/62878becd78b976e54c47aeb_small-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>'
const mediumPrize = '<lottie-player src="https://uploads-ssl.webflow.com/628239cfa6d9f0b6479c6b41/62878a0293e86767a8ff9926_medium-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>'
const bigPrize = '<lottie-player src="https://uploads-ssl.webflow.com/628239cfa6d9f0b6479c6b41/62878510a560bd3648acce1d_big-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>'

const prize = [
  smallPrize,
  mediumPrize,
  bigPrize
];

$("#trigger1").click(function(){
    $("#trigger1").fadeOut(1);
    $("#trigger2").fadeOut(1);
    $("#trigger3").fadeOut(1);
    reward = getRandom(prize);
    console.log(reward);
    $("#prize-1").append(reward);
    $('#prize-block-1').append('<div class="text-block-3">você ganhou<br><span class="text-span">R$XXX,XX</span></div>');
    $('#prize-2').animate({opacity: '0.5'}, 300 );
    $('#prize-3').animate({opacity: '0.5'}, 300 );
    $('#key-holder').animate({opacity: '0'}, 300 );
    $('#prize-block-1').delay(1000).animate({opacity: '1'}, 500 );
    setTimeout(function(){
        if (reward == '<lottie-player src="https://uploads-ssl.webflow.com/628239cfa6d9f0b6479c6b41/62878becd78b976e54c47aeb_small-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>') {
            $("#prize-2").append('<lottie-player src="https://uploads-ssl.webflow.com/628239cfa6d9f0b6479c6b41/62878a0293e86767a8ff9926_medium-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>');
            $("#prize-3").append('<lottie-player src="https://uploads-ssl.webflow.com/628239cfa6d9f0b6479c6b41/62878510a560bd3648acce1d_big-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>');
            $('#prize-block-2').append('<div class="text-block-3">você perdeu<br><span class="text-span">R$XXX,XX</span></div>');
            $('#prize-block-3').append('<div class="text-block-3">você perdeu<br><span class="text-span">R$XXX,XX</span></div>');
            $('#prize-block-2').delay(1000).animate({opacity: '1'}, 500 );
            $('#prize-block-3').delay(1000).animate({opacity: '1'}, 500 );
        } else if (reward == '<lottie-player src="https://uploads-ssl.webflow.com/628239cfa6d9f0b6479c6b41/62878a0293e86767a8ff9926_medium-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>' ) {
            $("#prize-2").append('<lottie-player src="https://uploads-ssl.webflow.com/628239cfa6d9f0b6479c6b41/62878becd78b976e54c47aeb_small-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>');
            $("#prize-3").append('<lottie-player src="https://uploads-ssl.webflow.com/628239cfa6d9f0b6479c6b41/62878510a560bd3648acce1d_big-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>');
            $('#prize-block-2').append('<div class="text-block-3">você perdeu<br><span class="text-span">R$XXX,XX</span></div>');
            $('#prize-block-3').append('<div class="text-block-3">você perdeu<br><span class="text-span">R$XXX,XX</span></div>');
            $('#prize-block-2').delay(1000).animate({opacity: '1'}, 500 );
            $('#prize-block-3').delay(1000).animate({opacity: '1'}, 500 );
        } else if (reward == '<lottie-player src="https://uploads-ssl.webflow.com/628239cfa6d9f0b6479c6b41/62878510a560bd3648acce1d_big-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>' ) {
            $("#prize-2").append('<lottie-player src="https://uploads-ssl.webflow.com/628239cfa6d9f0b6479c6b41/62878becd78b976e54c47aeb_small-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>');
            $("#prize-3").append('<lottie-player src="https://uploads-ssl.webflow.com/628239cfa6d9f0b6479c6b41/62878a0293e86767a8ff9926_medium-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>');
            $('#prize-block-2').append('<div class="text-block-3">você perdeu<br><span class="text-span">R$XXX,XX</span></div>');
            $('#prize-block-3').append('<div class="text-block-3">você perdeu<br><span class="text-span">R$XXX,XX</span></div>');
            $('#prize-block-2').delay(1000).animate({opacity: '1'}, 500 );
            $('#prize-block-3').delay(1000).animate({opacity: '1'}, 500 );
        }
    },2000);
});

$("#trigger2").click(function(){
    $("#trigger1").fadeOut(1);
    $("#trigger2").fadeOut(1);
    $("#trigger3").fadeOut(1);
    reward = getRandom(prize);
    $("#prize-2").append(reward);
    $('#prize-block-2').append('<div class="text-block-3">você ganhou<br><span class="text-span">R$XXX,XX</span></div>');
    $('#prize-1').animate({opacity: '0.5'}, 300 );
    $('#prize-3').animate({opacity: '0.5'}, 300 );
    $('#key-holder').animate({opacity: '0'}, 300 );
    $('#prize-block-2').delay(1000).animate({opacity: '1'}, 500 );
    setTimeout(function(){
        if (reward == '<lottie-player src="https://uploads-ssl.webflow.com/628239cfa6d9f0b6479c6b41/62878becd78b976e54c47aeb_small-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>') {
            $("#prize-1").append('<lottie-player src="https://uploads-ssl.webflow.com/628239cfa6d9f0b6479c6b41/62878a0293e86767a8ff9926_medium-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>');
            $("#prize-3").append('<lottie-player src="https://uploads-ssl.webflow.com/628239cfa6d9f0b6479c6b41/62878510a560bd3648acce1d_big-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>');
            $('#prize-block-1').append('<div class="text-block-3">você perdeu<br><span class="text-span">R$XXX,XX</span></div>');
            $('#prize-block-3').append('<div class="text-block-3">você perdeu<br><span class="text-span">R$XXX,XX</span></div>');
            $('#prize-block-1').delay(1000).animate({opacity: '1'}, 500 );
            $('#prize-block-3').delay(1000).animate({opacity: '1'}, 500 );
        } else if (reward == '<lottie-player src="https://uploads-ssl.webflow.com/628239cfa6d9f0b6479c6b41/62878a0293e86767a8ff9926_medium-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>' ) {
            $("#prize-1").append('<lottie-player src="https://uploads-ssl.webflow.com/628239cfa6d9f0b6479c6b41/62878becd78b976e54c47aeb_small-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>');
            $("#prize-3").append('<lottie-player src="https://uploads-ssl.webflow.com/628239cfa6d9f0b6479c6b41/62878510a560bd3648acce1d_big-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>');
            $('#prize-block-1').append('<div class="text-block-3">você perdeu<br><span class="text-span">R$XXX,XX</span></div>');
            $('#prize-block-3').append('<div class="text-block-3">você perdeu<br><span class="text-span">R$XXX,XX</span></div>');
            $('#prize-block-1').delay(1000).animate({opacity: '1'}, 500 );
            $('#prize-block-3').delay(1000).animate({opacity: '1'}, 500 );
        } else if (reward == '<lottie-player src="https://uploads-ssl.webflow.com/628239cfa6d9f0b6479c6b41/62878510a560bd3648acce1d_big-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>' ) {
            $("#prize-1").append('<lottie-player src="https://uploads-ssl.webflow.com/628239cfa6d9f0b6479c6b41/62878becd78b976e54c47aeb_small-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>');
            $("#prize-3").append('<lottie-player src="https://uploads-ssl.webflow.com/628239cfa6d9f0b6479c6b41/62878a0293e86767a8ff9926_medium-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>');
            $('#prize-block-1').append('<div class="text-block-3">você perdeu<br><span class="text-span">R$XXX,XX</span></div>');
            $('#prize-block-3').append('<div class="text-block-3">você perdeu<br><span class="text-span">R$XXX,XX</span></div>');
            $('#prize-block-1').delay(1000).animate({opacity: '1'}, 500 );
            $('#prize-block-3').delay(1000).animate({opacity: '1'}, 500 );
        }
    },2000);
});

$("#trigger3").click(function(){
    $("#trigger1").fadeOut(1);
    $("#trigger2").fadeOut(1);
    $("#trigger3").fadeOut(1);
    reward = getRandom(prize);
    $("#prize-3").append(reward);
    $('#prize-block-3').append('<div class="text-block-3">você ganhou<br><span class="text-span">R$XXX,XX</span></div>');
    $('#prize-1').animate({opacity: '0.5'}, 300 );
    $('#prize-2').animate({opacity: '0.5'}, 300 );
    $('#key-holder').animate({opacity: '0'}, 300 );
    $('#prize-block-3').delay(1000).animate({opacity: '1'}, 500 );
    setTimeout(function(){
        if (reward == '<lottie-player src="https://uploads-ssl.webflow.com/628239cfa6d9f0b6479c6b41/62878becd78b976e54c47aeb_small-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>') {
            $("#prize-1").append('<lottie-player src="https://uploads-ssl.webflow.com/628239cfa6d9f0b6479c6b41/62878a0293e86767a8ff9926_medium-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>');
            $("#prize-2").append('<lottie-player src="https://uploads-ssl.webflow.com/628239cfa6d9f0b6479c6b41/62878510a560bd3648acce1d_big-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>');
            $('#prize-block-1').append('<div class="text-block-3">você perdeu<br><span class="text-span">R$XXX,XX</span></div>');
            $('#prize-block-2').append('<div class="text-block-3">você perdeu<br><span class="text-span">R$XXX,XX</span></div>');
            $('#prize-block-1').delay(1000).animate({opacity: '1'}, 500 );
            $('#prize-block-2').delay(1000).animate({opacity: '1'}, 500 );
        } else if (reward == '<lottie-player src="https://uploads-ssl.webflow.com/628239cfa6d9f0b6479c6b41/62878a0293e86767a8ff9926_medium-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>' ) {
            $("#prize-1").append('<lottie-player src="https://uploads-ssl.webflow.com/628239cfa6d9f0b6479c6b41/62878becd78b976e54c47aeb_small-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>');
            $("#prize-2").append('<lottie-player src="https://uploads-ssl.webflow.com/628239cfa6d9f0b6479c6b41/62878510a560bd3648acce1d_big-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>');
            $('#prize-block-1').append('<div class="text-block-3">você perdeu<br><span class="text-span">R$XXX,XX</span></div>');
            $('#prize-block-2').append('<div class="text-block-3">você perdeu<br><span class="text-span">R$XXX,XX</span></div>');
            $('#prize-block-1').delay(1000).animate({opacity: '1'}, 500 );
            $('#prize-block-2').delay(1000).animate({opacity: '1'}, 500 );
         } else if (reward == '<lottie-player src="https://uploads-ssl.webflow.com/628239cfa6d9f0b6479c6b41/62878510a560bd3648acce1d_big-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>' ) {
            $("#prize-1").append('<lottie-player src="https://uploads-ssl.webflow.com/628239cfa6d9f0b6479c6b41/62878becd78b976e54c47aeb_small-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>');
            $("#prize-2").append('<lottie-player src="https://uploads-ssl.webflow.com/628239cfa6d9f0b6479c6b41/62878a0293e86767a8ff9926_medium-prize.json"  background="transparent"  speed="1"  style="width: 100px; height: 270px;"  autoplay></lottie-player>');
            $('#prize-block-1').append('<div class="text-block-3">você perdeu<br><span class="text-span">R$XXX,XX</span></div>');
            $('#prize-block-2').append('<div class="text-block-3">você perdeu<br><span class="text-span">R$XXX,XX</span></div>');
            $('#prize-block-1').delay(1000).animate({opacity: '1'}, 500 );
            $('#prize-block-2').delay(1000).animate({opacity: '1'}, 500 );
        }
    },2000);
});
