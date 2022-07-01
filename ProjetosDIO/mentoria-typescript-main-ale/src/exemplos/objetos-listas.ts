const pessoa ={
    nome: 'Mariana',
    idade: 28,
    profissao: 'dev'
}

pessoa.idade=25;

const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'Andre',
    idade: 25,
    profissao: 'pintor'
}

const paula: {nome: string, idade: number, profissao: string} = {
    nome: 'Andre',
    idade: 25,
    profissao: 'dev'
}

enum Profissao {
    Professora,
    Desenvolvedora,
    Pintor,
    Atriz,
    JogadoraFutebol
}

interface Estudante extends Pessoa {
    materias: string[]
}
interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

const vanessa: Pessoa ={
    nome: 'Vanessa',
    idade: 25,
    profissao: Profissao.Professora    
}
const maria: Pessoa ={
    nome: 'Maria',
    idade: 25,
    profissao: Profissao.Professora    
}

const jessica: Estudante = {
    nome: 'Jessica',
    idade: 20,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matematica', 'programação']
}


const monica: Estudante = {
    nome: 'Monica',
    idade: 29,
    materias: ['Matematica', 'programação']
}

function listar(lista: string[]){
    for (const item of lista){
        console.log(' - ', item);
    }
}

listar(monica.materias);