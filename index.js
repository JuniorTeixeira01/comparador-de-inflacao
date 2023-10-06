
document.getElementById('salarios').style.display = 'none';
document.getElementById('IPCA').style.display = 'none';
document.getElementById('comparacao').style.display = 'none'

function mudarestado(salarios, IPCA, comparacao) {
    let display = document.getElementById(salarios, IPCA, comparacao).style.display;
    if(display == "none")
        document.getElementById(salarios, IPCA, comparacao).style.display = 'block';
    else
        document.getElementById(salarios, IPCA, comparacao).style.display = 'none';
}


let listaSalarios = [
    {Ano: ' Ano: 2010 -', salario : "-- Salario Mínimo: R$ 510,00"},
    {Ano: ' Ano: 2011 -', salario : "-- Salario Mínimo: R$ 540,00"},
    {Ano: ' Ano: 2012 -', salario : "-- Salario Mínimo: R$ 622,00"},
    {Ano: ' Ano: 2013 -', salario : "-- Salario Mínimo: R$ 678,00"},
    {Ano: ' Ano: 2014 -', salario : "-- Salario Mínimo: R$ 724,00"},
    {Ano: ' Ano: 2015 -', salario : "-- Salario Mínimo: R$ 788,00"},
    {Ano: ' Ano: 2016 -', salario : "-- Salario Mínimo: R$ 880,00"},
    {Ano: ' Ano: 2017 -', salario : "-- Salario Mínimo: R$ 937,00"},
    {Ano: ' Ano: 2018 -', salario : "-- Salario Mínimo: R$ 954,00"},
    {Ano: ' Ano: 2019 -', salario : "-- Salario Mínimo: R$ 998,00"},
    {Ano: ' Ano: 2020 -', salario : "-- Salario Mínimo: R$ 1,045,00"},
    {Ano: ' Ano: 2021 -', salario : "-- Salario Mínimo: R$ 1,100,00"},
    {Ano: ' Ano: 2022 -', salario : "-- Salario Mínimo: R$ 1.212,00"},
    {Ano: ' Ano: 2023 -', salario : "-- Salario Mínimo: R$ 1.302,00"}
]


for(let objeto of listaSalarios){

    let content = objeto;
         
const salario = document.getElementById('salarios');

let ul = document.createElement('ul');
let li = document.createElement('li');

li.append(content.Ano);
ul.append(li);
salario.append( ul);
li.append(content.salario);
ul.append(li);
salario.append(ul);

} 

let listaIpca = [
    {Ano: "Ano: 2010 ", Taxa: "---- Inflação IPCA: 5,91%"},
    {Ano: "Ano: 2011 ", Taxa: "---- Inflação IPCA: 6,5%"},
    {Ano: "Ano: 2012 ", Taxa: "---- Inflação IPCA: 5,84%"},
    {Ano: "Ano: 2013 ", Taxa: "---- Inflação IPCA: 5,91%"},
    {Ano: "Ano: 2014 ", Taxa: "---- Inflação IPCA: 6,41%"},
    {Ano: "Ano: 2015 ", Taxa: "---- Inflação IPCA: 10,67%"},
    {Ano: "Ano: 2016 ", Taxa: "---- Inflação IPCA: 6,26%"},
    {Ano: "Ano: 2017 ", Taxa: "---- Inflação IPCA: 2,95%"},
    {Ano: "Ano: 2018 ", Taxa: "---- Inflação IPCA: 3,75%"},
    {Ano: "Ano: 2019 ", Taxa: "---- Inflação IPCA: 4,31%"},
    {Ano: "Ano: 2020 ", Taxa: "---- Inflação IPCA: 4,52%"},
    {Ano: "Ano: 2021 ", Taxa: "---- Inflação IPCA: 10,06%"},
    {Ano: "Ano: 2022 ", Taxa: "---- Inflação IPCA: 5,79%"},
    {Ano: "Ano: 2023 ", Taxa: "---- Inflação IPCA: Null "}
]

for(let objeto of listaIpca){

    let content = objeto;
         
const IPCA = document.getElementById('IPCA');

let ul = document.createElement('ul');
let li = document.createElement('li');

li.append(content.Ano);
ul.append(li);
IPCA.append( ul);
li.append(content.Taxa);
ul.append(li);
IPCA.append(ul);

} 

let listaPA = [
    {Ano: 'Ano: 2010 -- ', Aumento: 'Percentual de Aumento: -----'},
    {Ano: 'Ano: 2011 -- ', Aumento: 'Percentual de Aumento: 5.88%'},
    {Ano: 'Ano: 2012 -- ', Aumento: 'Percentual de Aumento: 15.1%'},
    {Ano: 'Ano: 2013 -- ', Aumento: 'Percentual de Aumento: 9.00%'},
    {Ano: 'Ano: 2014 -- ', Aumento: 'Percentual de Aumento: 6.78%'},
    {Ano: 'Ano: 2015 -- ', Aumento: 'Percentual de Aumento: 8.83%'},
    {Ano: 'Ano: 2016 -- ', Aumento: 'Percentual de Aumento: 11.67%'},
    {Ano: 'Ano: 2017 -- ', Aumento: 'Percentual de Aumento: 6.47%'},
    {Ano: 'Ano: 2018 -- ', Aumento: 'Percentual de Aumento: 1.81%'},
    {Ano: 'Ano: 2019 -- ', Aumento: 'Percentual de Aumento: 4.61%'},
    {Ano: 'Ano: 2020 -- ', Aumento: 'Percentual de Aumento: 4.70%'},
    {Ano: 'Ano: 2021 -- ', Aumento: 'Percentual de Aumento: 5.26%'},
    {Ano: 'Ano: 2022 -- ', Aumento: 'Percentual de Aumento: 10.18%'},
    {Ano: 'Ano: 2023 -- ', Aumento: 'Percentual de Aumento: -----'}
]

for(let objeto of listaPA){

    let content = objeto;
         
const IPCA = document.getElementById('comparacao');

let ul = document.createElement('ul');
let li = document.createElement('li');

li.append(content.Ano);
ul.append(li);
comparacao.append( ul);
li.append(content.Aumento);
ul.append(li);
comparacao.append(ul);

} 

