class Atendentes {

    constructor(nome, matricula, vendas = [mes1, mes2, mes3], reclamacao = [mes1, mes2, mes3], clientesAtendidos = [mes1, mes2, mes3], ) {
        this._nome = nome;
        this._matricula = matricula;
        this._vendas = vendas;
        this._reclamacao = reclamacao;
        this._clientesAtendidos = clientesAtendidos;
    }

    get nome() { return this._nome }
    get matricula() { return this._matricula }
    get vendas() { return this._vendas }
    get reclamacao() { return this._reclamacao }
    get clientesAtendidos() { return this._clientesAtendidos }
}