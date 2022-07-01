"use strict";
const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'dev'
};
pessoa.idade = 25;
const andre = {
    nome: 'Andre',
    idade: 25,
    profissao: 'pintor'
};
const paula = {
    nome: 'Andre',
    idade: 25,
    profissao: 'dev'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Desenvolvedora"] = 1] = "Desenvolvedora";
    Profissao[Profissao["Pintor"] = 2] = "Pintor";
    Profissao[Profissao["Atriz"] = 3] = "Atriz";
    Profissao[Profissao["JogadoraFutebol"] = 4] = "JogadoraFutebol";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 25,
    profissao: Profissao.Professora
};
const maria = {
    nome: 'Maria',
    idade: 25,
    profissao: Profissao.Professora
};
const jessica = {
    nome: 'Jessica',
    idade: 20,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matematica', 'programação']
};
const monica = {
    nome: 'Monica',
    idade: 29,
    materias: ['Matematica', 'programação']
};
function listar(lista) {
    for (const item of lista) {
        console.log(' - ', item);
    }
}
listar(monica.materias);
