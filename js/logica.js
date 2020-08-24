document.querySelector('#btnSaveNote').addEventListener('click',AgregarNota);
ImprimirEnTabla();// si elimino esta linea la tabla no retiene los valores

function AgregarNota(){
    var sApunte = document.querySelector('#txtApunte').value,
        dFecha = document.querySelector('#txtFecha').value,
        sEtiqueta = document.querySelector('#txtEtiqueta').value;
 
    addNotesSystem(sApunte,dFecha,sEtiqueta);
    ImprimirEnTabla();

}

function ImprimirEnTabla() {
    var ListNotas = GetListNotas(),
        tbody = document.querySelector('#TablaNotas tbody');
    
    tbody.innerHTML = '';
    console.log(ListNotas);
    for (var i = 0; i < ListNotas.length; i++) {
        var row = tbody.insertRow(i);
        var apunteCell = row.insertCell(0);
        var fechaCell = row.insertCell(1);
        var etiquetaCell = row.insertCell(2);
        apunteCell.innerHTML = ListNotas[i].apunte;
        fechaCell.innerHTML = ListNotas[i].fecha; 
        etiquetaCell.innerHTML = ListNotas[i].etiqueta;   
        
    
    tbody.appendChild(row);
    }
}
///
//// Boton para crear la lista de notas.
///


