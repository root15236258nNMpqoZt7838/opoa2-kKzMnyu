//-------------------------------Configure Enviroment
const basesWindow = document.getElementById('configurator-bases')
const eyesWindow = document.getElementById('configurator-eyes') 
const costumeWindow = document.getElementById('configurator-costumes')
const mouthsWindow = document.getElementById('configurator-mouths')  
const hairsWindow = document.getElementById('configurator-mouths')    
const bases = props[0];
const eyes = props[1]
const costumes = props[2];
const mouths = props[3];
const hairs = props[4];

//-------------------------------List all props
bases.forEach((base) => {
    indice = 0;
    $('#configurator-bases').append("<a><img src='"+base+"' alt='' class='costume-thumb' id='"+indice+"'></img></a>")
    indice++
    if(indice === bases.length) {
        indice = 0;
    }
}); 

eyes.forEach((eye) => {
    indice = 0;
    $('#configurator-eyes').append("<a><img src='"+eye+"' alt='' class='costume-thumb' id='"+indice+"'></img></a>")
    indice++
    if(indice === eyes.length) {
        indice = 0;
    }
}); 

costumes.forEach((costume) => {
    indice = 0;
    $('#configurator-costumes').append("<a><img src='"+costume+"' alt='' class='costume-thumb' id='"+indice+"'></img></a>")
    indice++
    if(indice === costumes.length) {
        indice = 0;
    }
});

mouths.forEach((mouth) => {
    indice = 0;
    $('#configurator-mouths').append("<a><img src='"+mouth+"' alt='' class='costume-thumb' id='"+indice+"'></img></a>")
    indice++
    if(indice === mouths.length) {
        indice = 0;
    }
});

hairs.forEach((hair) => {
    indice = 0;
    $('#configurator-hair').append("<a><img src='"+hair+"' alt='' class='costume-thumb' id='"+indice+"'></img></a>")
    indice++
    if(indice === hair.length) {
        indice = 0;
    }
});

//-------------------------------Create Click Triggers
const onClickBases = (event) => {
    
    const cId = event.srcElement.id;
    
    if (cId == "configurator-bases"){
        console.log('none');
    } else if (cId.length) {
        $('.base').empty();
        $('.base').append("<img src='"+bases[cId]+"' alt='' class='costume-img'></img>")
        console.log(event.srcElement.id);
    }
}

const onClickEyes = (event) => {
    
    const cId = event.srcElement.id;
    
    if (cId == "configurator-eyes"){
        console.log('none');
    } else if (cId.length) {
        $('.eyes').empty();
        $('.eyes').append("<img src='"+eyes[cId]+"' alt='' class='costume-img'></img>")
        console.log(event.srcElement.id);
    }
}

const onClickCostumes = (event) => {
    
    const cId = event.srcElement.id;
    
    if (cId == "configurator-costumes") {
        console.log("none")
    } else if (cId.length) {
        $('.costume').empty();
        $('.costume').append("<img src='"+costumes[cId]+"' alt='' class='costume-img'></img>")
        console.log(event.srcElement.id);
    }
}
const onClickMouths = (event) => {
    
    const cId = event.srcElement.id;
    
    if (cId == "configurator-mouths") {
        console.log("none")
    } else if (cId.length) {
        $('.mouth').empty();
        $('.mouth').append("<img src='"+mouths[cId]+"' alt='' class='costume-img'></img>")
        console.log(event.srcElement.id);
    }
}

const onClickHairs = (event) => {
    
    const cId = event.srcElement.id;
    
    if (cId == "configurator-hairs") {
        console.log("none")
    } else if (cId.length) {
        $('.hair').empty();
        $('.hair').append("<img src='"+hairs[cId]+"' alt='' class='costume-img'></img>")
        console.log(event.srcElement.id);
    }
}

//Listen fro Clicks
basesWindow.addEventListener('click', onClickBases);
eyesWindow.addEventListener('click', onClickEyes);
costumeWindow.addEventListener('click', onClickCostumes);
mouthsWindow.addEventListener('click', onClickMouths);
hairsWindow.addEventListener('click', onClickHairs);
