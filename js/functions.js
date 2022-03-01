function checkInicio() {
    if (document.inicioSesion.agree.checked==false) {return}

        let user = document.getElementById('inputEmail');
        let clave = document.getElementById('inputPassword');
        if (window.localStorage.getItem(user)) {
            if (condition) {
                
            }

        }
        window.location.href = "./actividades.html";
}

function cerrarSesion() {
    // window.localStorage.removeItem(user);
    window.location.href = "./inicio.html";
}

function goToActividades(){
    window.location.href = "./actividades.html";
}

function goToRegistro2(){
    window.location.href = "./registro2.html";
}

function verModal(){
    var myModal = document.getElementById('myModal')
    var myInput = document.getElementById('myInput')

    myModal.addEventListener('shown.bs.modal', function () {
    myInput.focus()
})
}
