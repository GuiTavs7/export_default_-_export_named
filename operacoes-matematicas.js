function somar(numero1, numero2){
    return numero1 + numero2;
}

// 1) Export Default - Apenas uma exportação/importação por arquivo -> O nome do módulo importado pode ser diferente do exportado

export default somar;

// 2) Export Nomeada - Mais de uma exportação/importação por arquivo -> Usada na aula passada -> Os nomes devem ser idênticos 

// Usa-se chaves 

// Preferencialmente sempre usar exportações nomeadas para evitar confusão e erros com nomenclaturas!

// Força a usar o mesmo nome sempre que uma função for importada em um arquivo!