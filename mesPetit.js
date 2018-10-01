
function mesPetit() {
    i = 0, llistaNums = new Array, min = 0,max=0;
    while (5 > i++) {
        llistaNums.push(parseInt(prompt("Introdueix un numero")));
    }

    for (let i = 0; i < llistaNums.length; i++) {
        if (llistaNums[i] < min || i == 0) {
            min = llistaNums[i];
        }

    }

    for (let i = 0; i < llistaNums.length; i++){
	if (llistaNums[i] > max){
	    max = llistaNums[i];	
	}    


    }

    document.getElementById('display').innerHTML = "Min:" +min+"  Max:"+max;
}

