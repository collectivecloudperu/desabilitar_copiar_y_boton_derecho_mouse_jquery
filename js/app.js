$(document).ready(function() {

    // Deshabilito la función copiar 
    $('.texto').on("copy", function(e) { 

        // Muestro un mensaje que no se puede copiar el contenido 
        $(".mensaje").html('<div class="alert alert-danger">No se Puede copiar el contenido !</div>');
        e.preventDefault();
    });

    // Deshabilito el botón derecho del mouse  
    $('.texto').mousedown(function(e) {

        // Selecciono el segundo botón (derecho) del mouse '2' 
        if (e.button == 2) {
            e.preventDefault();
            alert('El botón derecho del Mouse esta Deshabilitado !');
        }
    });

}); 