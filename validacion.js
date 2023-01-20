const btnEnvio = document.getElementById("enviarCorreo");

btnEnvio.addEventListener("click", function(e){
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const asunto = document.getElementById("asunto").value;
    const mensaje = document.getElementById("mensagem").value;
    const envio = window.location.href=`mailto:ugartejoa12@gmail.com?
    subject=envioFormulario&body=nombre%3A${nombre}%0Aemail%3A${email}
    %0Aasunto%3A${asunto}%0Amensaje%3A${mensaje}`;
    console.log(e);
    console.log(envio);
    
});
