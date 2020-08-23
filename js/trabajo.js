var ListNotas = [];



function addNotesSystem(pApunte, pFecha, pEtiqueta){

    var NewNote = {
        apunte : pApunte,
        fecha : pFecha,
        etiqueta : pEtiqueta 
    };

    console.log(NewNote);
    ListNotas.push(NewNote);
}

function GetListNotas(){
    return ListNotas;
}