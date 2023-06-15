	var Nombre = document.forms['form']['Nombre'];
	var Apellidos = document.forms['form']['Apellidos'];
	var email = document.forms['form']['email'];
	var documento = document.forms['form']['documento'];
	var telefono = document.forms['form']['telefono'];
	var contraseña = document.forms['form']['contraseña'];
	var produccion = document.forms['form']['produccion'];
/* 	var opciones = document.forms['form']['opciones'];
	var usuario = document.forms['form']['usuario']; */
	
	var nombre_error = document.getElementById('nombre_error');
	var apellidos_error = document.getElementById('apellidos_error');
	var email_error = document.getElementById('email_error');
	var documento_error = document.getElementById('documento_error');
	var telefono_error = document.getElementById('telefono_error');
	var contraseña_error = document.getElementById('contraseña_error');
	var produccion_error = document.getElementById('produccion_error');
/* 	var opciones_error = document.getElementById('opciones_error');
	var usuario_error = document.getElementById('usuario_error'); */
	
	Apellidos.addEventListener('textInput', apellidos_Verify);
	Nombre.addEventListener('textInput', nombre_Verify);
	email.addEventListener('textInput', email_Verify);
	documento.addEventListener('textInput', documento_Verify);
	telefono.addEventListener('textInput', telefono_Verify);
	contraseña.addEventListener('textInput', contraseña_Verify);
 	produccion.addEventListener('textInput', produccion_Verify);
/* 	opciones.addEventListener('text', opciones_Verify);
	usuario.addEventListener('textInput', usuario_Verify); */
	
	function validated(){
		if (Nombre.value.length < 6) {
			Nombre.style.border = "1px solid red";
			nombre_error.style.display = "block";
			Nombre.focus();
			return false;
		}
		if (Apellidos.value.length < 9) {
			Apellidos.style.border = "1px solid red";
			apellidos_error.style.display = "block";
			email.focus();
			return false;
		}
		if (email.value.length < 9) {
			email.style.border = "1px solid red";
			email_error.style.display = "block";
			email.focus();
			return false;
		}
		if (documento.value.length < 9) {
			documento.style.border = "1px solid red";
			documento_error.style.display = "block";
			documento.focus();
			return false;
		}
		if (telefono.value.length < 10) {
			telefono.style.border = "1px solid red";
			telefono_error.style.display = "block";
			telefono.focus();
			return false;
		}
		if (contraseña.value.length < 6) {
			contraseña.style.border = "1px solid red";
			contraseña_error.style.display = "block";
			contraseña.focus();
			return false;
		}
		if (produccion.value.length < 9) {
			produccion.style.border = "1px solid red";
			produccion_error.style.display = "block";
			produccion.focus();
			return false;
		}
		if (opciones.value.length < 9) {
			opciones.style.border = "1px solid red";
			opciones_error.style.display = "block";
			opciones.focus();
			return false;
		}
		if (usuario.value.length < 10) {
			usuario.style.border = "1px solid red";
			usuario_error.style.display = "block";
			usuario.focus();
			return false;
		}
	
	}
	function nombre_Verify(){
		if (Nombre.value.length >= 5) {
			Nombre.style.border = "1px solid silver";
			nombre_error.style.display = "none";
			return true;
		}
	}	
	function apellidos_Verify(){
		if (Apellidos.value.length >= 8) {
			Apellidos.style.border = "1px solid silver";
			apellidos_error.style.display = "none";
			return true;
		}
	}
	function email_Verify(){
		if (email.value.length >= 8) {
			email.style.border = "1px solid silver";
			email_error.style.display = "none";
			return true;
		}
	}
	function documento_Verify(){
		if (documento.value.length >= 8) {
			documento.style.border = "1px solid silver";
			documento_error.style.display = "none";
			return true;
		}
	}
	function telefono_Verify(){
		if (telefono.value.length >= 8) {
			telefono.style.border = "1px solid silver";
			telefono_error.style.display = "none";
			return true;
		}
	}
	function contraseña_Verify(){
		if (contraseña.value.length >= 5) {
			contraseña.style.border = "1px solid silver";
			contraseña_error.style.display = "none";
			return true;
		}
	}
	function produccion_Verify(){
		if (produccion.value.length >= 8) {
			produccion.style.border = "1px solid silver";
			produccion_error.style.display = "none";
			return true;
		}
	}
	function opciones_Verify(){
		if (opciones.value.length >= 8) {
			opciones.style.border = "1px solid silver";
			opciones_error.style.display = "none";
			return true;
		}
	}
	function usuario_Verify(){
		if (usuario.value.length >= 5) {
			usuario.style.border = "1px solid silver";
			usuario_error.style.display = "none";
			return true;
		}
	}
	
	
	