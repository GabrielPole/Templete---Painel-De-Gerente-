$(document).ready(function (){
        Morris.Bar({
            element: 'morris-bar-chart',
            data: [{
                y: 'Janeiro',
                a: 256,
                b: 300,
                c: 185
            }, {
                y: 'Fevereiro',
                a: 156,
                b: 200,
                c: 85
            }, {
                y: 'Março',
                a: 350,
                b: 267,
                c: 164,
            }],
            xkey: 'y',
            ykeys: ['a', 'b', 'c',],
            labels: ['A', 'B', 'C'],
            barColors: ['#5FBEAA', '#5D9CEC', '#cCcCcC'],
            hideHover: 'auto',
            gridLineColor: '#eef0f2',
            resize: true
        });
});

