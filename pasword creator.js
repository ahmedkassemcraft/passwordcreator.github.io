function generarContrasena() {
  var longitud = parseInt(document.getElementById('longitud').value);
  var seguridad = document.getElementById('seguridad').value;
  var caracteres = '';

  if (seguridad === 'baja') {
    caracteres = 'abcdefghijklmnopqrstuvwxyz';
  } else if (seguridad === 'media') {
    caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  } else if (seguridad === 'alta') {
    caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  }

  var contrasena = '';
  for (var i = 0; i < longitud; i++) {
    var indice = Math.floor(Math.random() * caracteres.length);
    contrasena += caracteres.charAt(indice);
  }

  document.getElementById('password').value = contraseña;
}

function mostrarNivelSeguridad() {
  var seguridad = document.getElementById('seguridad').value;
  var nivelSeguridad = document.getElementById('nivel-seguridad');

  if (seguridad === 'baja') {
    nivelSeguridad.innerText = 'Nivel de seguridad: Baja';
    nivelSeguridad.style.color = '#FF4136';
  } else if (seguridad === 'media') {
    nivelSeguridad.innerText = 'Nivel de seguridad: Media';
    nivelSeguridad.style.color = '#FF851B';
  } else if (seguridad === 'alta') {
    nivelSeguridad.innerText = 'Nivel de seguridad: Alta';
    nivelSeguridad.style.color = '#2ECC40';
  }
}

// Event listener para el cambio de seguridad
document.getElementById('seguridad').addEventListener('change', mostrarNivelSeguridad);
