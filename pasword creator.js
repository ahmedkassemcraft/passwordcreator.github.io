function generarContrasena() {
  var longitud = obtenerLongitud();
  var nivelSeguridad = obtenerNivelSeguridad();
  var contrasena = generarContrasenaSegura(longitud, nivelSeguridad);
  mostrarContrasena(contrasena);
}

function obtenerLongitud() {
  var longitudInput = document.getElementById('longitud');
  return parseInt(longitudInput.value);
}

function obtenerNivelSeguridad() {
  var nivelSeguridadInput = document.getElementById('security-level');
  return nivelSeguridadInput.value;
}

function generarContrasenaSegura(longitud, nivelSeguridad) {
  var caracteres = '';
  
  if (nivelSeguridad === 'low') {
    caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  } else if (nivelSeguridad === 'medium') {
    caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  } else if (nivelSeguridad === 'high') {
    caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
  }
  
  var contrasena = '';
  
  for (var i = 0; i < longitud; i++) {
    var indice = Math.floor(Math.random() * caracteres.length);
    contrasena += caracteres.charAt(indice);
  }
  
  return contrasena;
}

function mostrarContrasena(contrasena) {
  var passwordInput = document.getElementById('password');
  passwordInput.value = contrasena;
}
