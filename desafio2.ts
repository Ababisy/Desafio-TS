type dados = {
    nome: string,
    idade: number,
    profissao: Job
}

enum Job {
    atriz,
    pedreiro,
    padeiro
}


let pessoa1 : dados = {
    nome: "Maria",
    idade: 29,
    profissao: Job.atriz
};

let pessoa2 : dados = {
    nome: "Roberto",
    idade: 19,
    profissao: Job.pedreiro
};

let pessoa3 : dados = {
    nome: "Laura",
    idade: 32,
    profissao: Job.atriz
};

let pessoa4 : dados = {
    nome: "Carlos",
    idade: 19,
    profissao: Job.padeiro
}