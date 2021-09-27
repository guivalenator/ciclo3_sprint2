function validar_nombre_usuario(string) {
    if (/^\s/.test(string) || /\s$/.test(string)) {
        //alert("El nombre de usuario no puede empezar, o terminar con espacio");
        return false;
    }

    if (/^[a-zA-Z ]*$/.test(string)) {

        if (string != string.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))) {
            //alert("El usuario debe estar en minùscula");
            return false;
        }
    }
    return true;
}


function validar_edad_usuario(edad) {
    if (!isNaN(edad)) {
        if (edad > 0) {
            if (edad >= 13 && (edad < 110)) {

                return true;
            }
        }
    } return false;
}
function validar_contrasena(string) {
    expresion = /[A-Za-z0-9]/;

    if (string.lenght >= 6) {
        if (expresion.test(string)) {
            return false
        }
    } return true
}
module.exports.validar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_contrasena = validar_contrasena;
module.exports.validar_edad_usuario = validar_edad_usuario;
