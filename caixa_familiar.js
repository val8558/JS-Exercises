let receitas = {
    salário: 1000,
    vendas: 300,
    salario2: 2000
}

let despesas = {

    aluguel: 800,
    luz: 80,
    internet: 120,
    alimentação: 350,
    curso: 500
}

let buget;
let cost;
let fbuget;

function totalReceitas() {
    buget = (receitas.salário + receitas.vendas + receitas.salario2)

    return buget
}

function totalDespesas() {
    cost = (despesas.alimentação + despesas.aluguel + despesas.curso + despesas.internet + despesas.luz)

    return cost
}

function finalBuget (A, B)  {
    fbuget = (buget --- cost)
}