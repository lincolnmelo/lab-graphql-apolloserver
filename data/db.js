const alunos = [{
    id: 1,
    nome: "João",
    sobrenome: "silva",
    idade: 30,
    responsaveis: [{
        parentesco: "Pai",
        nome: "alexandre",
        idade: 48,
        aluno_id: 1
    }]
}, {
    id: 2,
    nome: "Luna",
    sobrenome: "puert",
    idade: 26,
    responsaveis: [{
        parentesco: "Mãe",
        nome: "Maria do Carmo",
        idade: 53,
        aluno_id: 2
    }]
}]

module.exports = {alunos}

