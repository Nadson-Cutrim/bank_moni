export default function EhMaiorDeIdade(campo){
const dataNascimento = new Date(campo.value);

if(!validaIdade(dataNascimento)){
    campo.setCustomValidity("o Usuário não é maior de idade.");
}
}

function validaIdade(data){
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());
    return dataMais18 <= dataAtual;
}
