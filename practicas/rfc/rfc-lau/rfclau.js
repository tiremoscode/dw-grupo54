


function palabra(w) { // esta función la robe de internet porque no supe como hacerla

        var regex = /[^aeiou]/gi;
        var vowels = w.replace(regex, "");
        var len =  vowels.length;
        if(len > 1)
                return w[0] + (vowels[0] == w[0] ? vowels[1] : vowels[0]);
        else
                return w[0] + 0;
}

const   dia         = document.getElementById('DiaNacimiento').value,
        mes         = document.getElementById('MesNacimiento').value,
        ano         = document.getElementById('AnoNacimiento').value,
        nombre      = document.getElementById('Nombre').value,
        apellido1   = document.getElementById('apellido1').value,
        apellido2   = document.getElementById('apellido2').value;

function rfc(dia , mes, ano, nombre, apellido1, apellido2) {
        
        if(dia  || mes || ano || nombre || apellido1 || apellido2 = ''){
                alert 'Falta información';
                return;
        }
        const fecha =  `${ano}${mes}${dia}` ;
        const primLetrApell =palabra(apellido1);
        const rfc = '*** '+  primLetrApell + apellido2.slice(0,1) + nombre.slice(0,1) +fecha + "XXX ***";
        const divRfc = document.getElementById('RFC');
        divRfc.innerText = rfc;
}