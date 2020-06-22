function AtulizarDados(id) {
    switch (id) {
        case 0:
            info = new Atendentes("Carlos", 321654987, [50, 100, 200], [200, 10, 80], [200, 10, 300])
            break

        case 1:
            info = new Atendentes("Olavo", 123456789, [185, 236, 500], [258, 396, 100], [258, 245, 356])
            break

        case 2:
            info = new Atendentes("Julio", 215487963, [245, 364, 364], [347, 368, 346], [685, 345, 145])
            break

        case 3:
            info = new Atendentes("Renato", 326598741, [254, 156, 452], [143, 52, 145], [357, 396, 325])
            break

        default:
            break
    }
    print(info)
}

function print(info) {

    filtraAtendente(info.nome)

    var SobreporGrafico = document.querySelector("#morris-bar-chart")
    oldGrafico = SobreporGrafico.querySelector('svg').remove()
    

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: 'Janeiro',
            a: info.vendas[0],
            b: info.reclamacao[0],
            c: info.clientesAtendidos[0]
        }, {
            y: 'Fevereiro',
            a: info.vendas[1],
            b: info.reclamacao[1],
            c: info.clientesAtendidos[1]
        }, {
            y: 'Março',
            a: info.vendas[2],
            b: info.reclamacao[2],
            c: info.clientesAtendidos[2]
        }],
        xkey: 'y',
        ykeys: ['a', 'b', 'c',],
        labels: ['A', 'B', 'C'],
        barColors: ['#5FBEAA', '#5D9CEC', '#cCcCcC'],
        hideHover: 'auto',
        gridLineColor: '#eef0f2',
        resize: true
    })


}
