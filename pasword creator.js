// Función para generar una contraseña de alta seguridad
function generarContrasena() {
  // Caracteres permitidos en la contraseña
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  
  // Obtener el nivel de seguridad seleccionado
  const selectElement = document.getElementById('security-select');
  const nivelSeguridad = selectElement.value;
  
  let longitud;
  
  // Determinar la longitud de la contraseña según el nivel de seguridad
  if (nivelSeguridad === 'low') {
    longitud = 8;
  } else if (nivelSeguridad === 'medium') {
    longitud = 12;
  } else {
    longitud = 16;
  }
  
  let contrasena = '';
  
  // Generar la contraseña
  for (let i = 0; i < longitud; i++) {
    const index = Math.floor(Math.random() * caracteres.length);
    contrasena += caracteres[index];
  }
  
  // Mostrar la contraseña generada en el campo de texto
  document.getElementById('password').value = contrasena;
}

// Obtener referencia al elemento de la ventana emergente
const popup = document.getElementById('popup');

// Función para mostrar la ventana emergente
function mostrarPopup() {
  popup.style.display = 'flex';
}

// Función para cerrar la ventana emergente
function cerrarPopup() {
  popup.style.display = 'none';
}

// Mostrar la ventana emergente al cargar la página
window.addEventListener('load', mostrarPopup);
