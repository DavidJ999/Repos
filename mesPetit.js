
function mesPetit() {
    i = 0, llista = new Array, min = 0,max=0;
    while (10 > i++) {
        llista.push(parseInt(prompt("Introdueix un numero")));
    }

    for (let i = 0; i < llista.length; i++) {
        if (llista[i] < min || i == 0) {
            min = llista[i];
        }

    }

    for (let i = 0; i < llista.length; i++){
	if (llista[i] > max){
	    max = llista[i];
	}


    }

    document.getElementById('display').innerHTML = "Min:" +min+"  Max:"+max;
}

