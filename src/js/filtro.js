var buscar = document.querySelector("#filtrar-tabela")
buscar.addEventListener("input", function () {
    console.log(this.value)
    var clientes = document.querySelectorAll(".cliente")
    if (this.value.length > 0) {
        for (var i = 0; i < clientes.length; i++) {
            var cliente = clientes[i]
            var tdNome = cliente.querySelector(".info-nome")
            var nome = tdNome.textContent
            var expressao = new RegExp(this.value, "i")

            if (!expressao.test(nome)) {
                cliente.setAttribute("style", "display:none")
            } else {
                cliente.setAttribute("style", "")
            }
        }
    } else {
        for (var i = 0; i < clientes.length; i++) {
            var cliente = clientes[i]
            cliente.setAttribute("style", "")
        }
    }
})

function filtraAtendente(infoNome) {
    var clientes = document.querySelectorAll(".cliente")
    for (var i = 0; i < clientes.length; i++) {
        var cliente = clientes[i]
        var tdNome = cliente.querySelector(".info-atendente")
        var nome = tdNome.textContent
        if (nome != infoNome) {
            cliente.setAttribute("style", "display:none")
        } else {
            cliente.setAttribute("style", "")
        }
    }
}

function mostrarTudo() {
    var clientes = document.querySelectorAll(".cliente")
    for (var i = 0; i < clientes.length; i++) {
        var cliente = clientes[i]
        cliente.setAttribute("style", "")
    }
}