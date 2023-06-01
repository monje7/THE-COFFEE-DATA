
    function validateForm(event) {
      event.preventDefault(); // Evita que el formulario se envíe automáticamente

      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;

      if (name === "" || email === "" || password === "") {
        alert("Por favor, complete todos los campos.");
        return;
      }

      alert("¡Registro exitoso!");

    
      document.getElementById("registrationForm").reset(); 
    }