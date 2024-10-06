// Mostrar/ocultar sección "datos-conductor" cuando se selecciona el checkbox
document.getElementById('conductor-diferente').addEventListener('change', function () {
    var datosConductor = document.getElementById('datos-conductor');
    if (this.checked) {
      datosConductor.style.display = 'block';
    } else {
      datosConductor.style.display = 'none';
    }
});

 // Cálculo del coste total
 document.getElementById('fecha-fin').addEventListener('change', function() {
    var fechaInicio = document.getElementById('fecha-inicio').value;
    var fechaFin = document.getElementById('fecha-fin').value;
    if (fechaInicio && fechaFin) {
      var startDate = new Date(fechaInicio);
      var endDate = new Date(fechaFin);
      var diffTime = Math.abs(endDate - startDate);
      var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
      
      // Suponiendo una tarifa diaria de ejemplo
      var tarifaDiaria = 50; // Esto debería venir de la base de datos para cada vehículo
      var totalCoste = diffDays * tarifaDiaria;
      // document.getElementById('coste-total').value = totalCoste + " €";
      document.getElementById('coste-total').textContent = totalCoste + " €";

    }
  });

// Manejar la apertura del modal de Login
var modalLogin = document.getElementById('modal-login');
var modalRegistro = document.getElementById('modal-registro');
var btnTramitar = document.getElementById('tramitar-btn');
var registroLink = document.getElementById('registro-link');
var spanClose = document.getElementsByClassName('close');

// Obtener los campos del formulario de alquiler
var formAlquiler = document.getElementById('form-alquiler');
var requiredFields = document.querySelectorAll('#form-alquiler input[required], #form-alquiler select[required]');

// Función para validar que todos los campos obligatorios estén llenos
function validarCampos() {
    let allFieldsFilled = true;

    requiredFields.forEach(function (field) {
        if (!field.value) {
            allFieldsFilled = false;
            field.classList.add('input-error');  // Añadir clase de error si el campo está vacío
        } else {
            field.classList.remove('input-error');  // Quitar la clase de error si el campo está lleno
        }
    });

    return allFieldsFilled;
}

// Abrir el modal de Login al hacer clic en "Tramitar Alquiler"
btnTramitar.onclick = function(event) {
    event.preventDefault();  // Evitar que el formulario se envíe automáticamente

    // Validar los campos del formulario
    if (validarCampos()) {
        // Si todos los campos están completos, mostrar el modal de Login
        modalLogin.style.display = 'block';
    } else {
        // Si faltan campos, mostrar una alerta
        alert('Por favor, rellena todos los campos obligatorios antes de tramitar el alquiler.');
    }
};

// Cerrar el modal de Login
spanClose[0].onclick = function() {
    modalLogin.style.display = 'none';
};

// Abrir el modal de Registro desde el enlace en el modal de Login
registroLink.onclick = function(e) {
    e.preventDefault();  // Evitar que el enlace recargue la página
    modalLogin.style.display = 'none';
    modalRegistro.style.display = 'block';
};

// Cerrar el modal de Registro
spanClose[1].onclick = function() {
    modalRegistro.style.display = 'none';
};

// Cerrar los modales si se hace clic fuera de ellos
window.onclick = function(event) {
    if (event.target == modalLogin) {
        modalLogin.style.display = 'none';
    } else if (event.target == modalRegistro) {
        modalRegistro.style.display = 'none';
    }
};

// Mostrar/ocultar campo CIF Empresa según el tipo de cliente
document.getElementById('tipo_cliente').addEventListener('change', function () {
    var cifEmpresaGroup = document.getElementById('cif_empresa_group');
    if (this.value === 'empresa') {
        cifEmpresaGroup.style.display = 'block';  // Mostrar el campo CIF Empresa
        document.getElementById('cif_empresa').setAttribute('required', 'required');  // Hacerlo obligatorio
    } else {
        cifEmpresaGroup.style.display = 'none';  // Ocultar el campo CIF Empresa
        document.getElementById('cif_empresa').removeAttribute('required');  // Quitar la obligatoriedad
    }
});
