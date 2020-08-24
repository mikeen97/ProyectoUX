var ListNotas = [];



function addNotesSystem(pApunte, pFecha, pEtiqueta){

    var NewNote = {
        apunte : pApunte,
        fecha : pFecha,
        etiqueta : pEtiqueta 
    };

    console.log(NewNote);
    ListNotas.push(NewNote);
    localStorageListNotas(ListNotas);
}

function GetListNotas(){
    var storageList = localStorage.getItem('locaListNotas') 
    if(storageList == null){
        ListNotas= []
    }else{
        ListNotas = JSON.parse(storageList);
    }
    return ListNotas;
}

function localStorageListNotas(pList){
    localStorage.setItem('locaListNotas',JSON.stringify(pList));//guardar la lista en local storage

}

//////
////// parte para buscar nota 
/////

