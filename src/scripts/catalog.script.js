const bancoDeDados = {
    vacinas: {
        'bcg': {
            descricao: 'Descrição BCG'
        },
        'pfizer': {
            descricao: 'Descrição Pfizer'
        },
        'h1n1': {
            descricao: 'Descrição H1N1'
        },
        'febreAmarela': {
            descricao: 'Descrição Febre Amarela'
        },
        'polio': {
            descricao: 'Descrição Poliomielite'
        },
        'rotaVirus': {
            descricao: 'Descrição Rota Virus'
        }
    }
};

function exibeDescricao (nomeVacina){
    try{
        alert(bancoDeDados.vacinas[nomeVacina].descricao);
    }catch(err){
        alert('Descrição não cadastrada ou vacina não encontrada.');
    }
}
