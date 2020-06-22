var botaoAdicionar = document.querySelector("#adicionar-cliente")
botaoAdicionar.addEventListener("click", event => {
    event.preventDefault()

    var form = document.querySelector("#add-cliente")
    var cliente = recebeClinte(form)

    var clienteTr = criaTr(cliente)

    //adiciona cliente na tabela
    var tabela = document.querySelector("#tabela-clientes")
    tabela.appendChild(clienteTr)

    form.reset()

})

function recebeClinte(form) {
    var cliente = {
        cpf: form.cpf.value,
        nome: form.nome.value,
        atendente: form.atendente.value,
        email: form.email.value,
        telefone: form.telefone.value,
        data: form.data.value,
        sexo: form.sexo.value,
        endereço: form.endereco.value
    }
    return cliente
}

function criaTr(cliente) {

    var clienteTr = document.createElement("tr")
    clienteTr.classList.add("cliente")

    clienteTr.appendChild(criaTd(cliente.cpf, "info-cpf"))
    clienteTr.appendChild(criaTd(cliente.nome, "info-nome"))
    clienteTr.appendChild(criaTd(cliente.atendente, "info-atendente"))
    clienteTr.appendChild(criaTd(cliente.email, "info-email"))
    clienteTr.appendChild(criaTd(cliente.telefone, "info-telefone"))
    clienteTr.appendChild(criaTd(cliente.data, "info-data"))
    clienteTr.appendChild(criaTd(cliente.sexo, "info-sexo"))
    clienteTr.appendChild(criaTd(cliente.endereço, "info-endereco"))

    return clienteTr
}

function criaTd(dado, classe) {
    var td = document.createElement("td")
    td.textContent = dado
    td.classList.add(classe)

    return td
}