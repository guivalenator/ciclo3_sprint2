function validar_nombre_usuario(string) {
    var dato_nombre_usuario;
    dato_nombre_usuario = document.getElementById("dato_nombre_usuario").value;

    if (/^[a-zA-Z]+$/.test(dato_nombre_usuario)) {
        if (/^[A-Z]/.test(dato_nombre_usuario)) {
            if (dato_nombre_usuario.charAt(0) != ' ' && dato_nombre_usuario.charAt(dato_nombre_usuario.lenght) != ' ') {
                console.log(true);
                return true;
            }
        }
    }
    console.log(false);
    return false
}

function validar_edad_usuario(edad) {
    var dato_edad_usuario;
    dato_edad_usuario = document.getElementById("dato_edad_usuario").value;

    if (!isNaN(dato_edad_usuario)) {
        if (dato_edad_usuario > 0) {
            if ((dato_edad_usuario > 13) && (dato_edad_usuario < 110)) {
                console.log(true);;
                return true;
            }
        }
        
    } 
    console.log(false);
    return false;
}

function validar_contrasena(string) {
    var dato_contraseña;
    expresion = /[A-Za-z0-9]+$/;
    dato_contraseña = document.getElementById("dato_contraseña").value;

    if (dato_contraseña.lenght == 6) {
        if (expresion.test(dato_contraseña)) {
            console.log(true);
            return true;
        }
    }
    console.log(false);
    return false;
}

//module.exports.validar_nombre_usuario = validar_nombre_usuario;
//module.exports.validar_edad_usuario = validar_edad_usuario;
//module.exports.validar_contrasena = validar_contrasena;
