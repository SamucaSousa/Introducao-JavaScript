function comparaNumeros(a, b){
    if(!a || !b) return 'Defina dois números';
    const primeiraFrase = criaPrimeiraFrase(a, b);
    const segundaFrase = criaSegundaFrase(a, b)

    return `${primeiraFrase}. ${segundaFrase}`
}

function criaPrimeiraFrase(a, b){
    let saoIguais = '';
    if(a !== b){
        saoIguais = 'não';
    }
    return `Os números ${a} e ${b} ${saoIguais} são iguais`;
}

function criaSegundaFrase(a, b){
    let resultado10 = 'menor';
    let resultado20 = 'menor';

    const soma = a + b;
    const comparaDez = soma > 10;
    const comparaVinte = soma > 20;

    if(comparaDez){
        resultado10 = 'maior'
    }

    if(comparaVinte){
        resultado20 = 'maior'
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20`

}

console.log(comparaNumeros(4, 4))
    