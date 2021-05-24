var form = document.getElementById("contacto");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("btnEnviar");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = "Mensaje enviado, responderé a la brevedad";
    form.reset()
  }).catch(error => {
    status.innerHTML = "Oops! Hay un problema con el envio del formulario"
  });
}
form.addEventListener("submit", handleSubmit)