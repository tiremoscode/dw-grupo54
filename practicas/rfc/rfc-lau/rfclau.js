

function palabra(w) { // esta función la robe de internet porque no supe como hacerla

        var regex = /[^aeiou]/gi;
        var vowels = w.replace(regex, "");
        var len =  vowels.length;
        if(len > 1)
                return w[0] + (vowels[0] == w[0] ? vowels[1] : vowels[0]);
        else
                return w[0] + 0;
}



function rfc() {
        const divRfc = document.getElementById('RFC');
        const   dia         = document.getElementById('DiaNacimiento').value,
                mes         = document.getElementById('MesNacimiento').value,
                ano         = document.getElementById('AnoNacimiento').value,
                nombre      = document.getElementById('Nombre').value,
                apellido1   = document.getElementById('apellido1').value,
                apellido2   = document.getElementById('apellido2').value;
        console.log(dia !=='' & mes !=='' & ano !==''& nombre !==''& apellido1 !==''& apellido2!=='')
        const correcto=()=>{
                const fecha =  `${ano.substring(2,4)}${mes}${dia}` ;
                const primLetrApell =palabra(apellido1);
                const rfc = '*** '+  primLetrApell + apellido2.slice(0,1) + nombre.slice(0,1) +fecha + "XXX ***";
                
                return rfc.toUpperCase();

        }
        if (dia !=='' & mes !=='' & ano !==''& nombre !==''& apellido1 !==''& apellido2!==''){
                if(dia.length > 2){
                        alert ('El dia debe ser de 2 digitos o menos');
                        return;
                }else if(mes.length > 2){
                        alert ('El mes debe ser de 2 digitos o menos');
                        return;
                }else if(ano.length !== 4){
                        alert ('El año debe ser de 4 digitos');
                        return;
                }else{
                        if(dia.length == 1){
                                dia = '0' + dia
                        }else if(mes.length == 1){
                                mes = '0' + mes
                        }

                        alert( `  tu RFC es : ${correcto()}   `  );
                        divRfc.innerText=correcto();
                }
        }else{
                alert ('Falta información');
                return;
        }
}

function clean() {
        const divRfc = document.getElementById('RFC');
        const   dia         = document.getElementById('DiaNacimiento'),
                mes         = document.getElementById('MesNacimiento'),
                ano         = document.getElementById('AnoNacimiento'),
                nombre      = document.getElementById('Nombre'),
                apellido1   = document.getElementById('apellido1'),
                apellido2   = document.getElementById('apellido2');
        divRfc.innerText = '***---***' ;
        dia.value = '' ;
        mes.value = '' ;
        ano.value = '' ;
        nombre.value = '' ;
        apellido1.value = '' ;
        apellido2.value = '' ;
}