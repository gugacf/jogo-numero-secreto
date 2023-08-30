function verificaSeChutePossuiValorValido(chute) {
    const numero = +chute; //Converte string em número inteiro. Só em fazer a soma, a string é convertida para inteiro

    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += "<div>Valor inválido</div>";
        return;
    }

    if (numeroMaiorOuMenorQueValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: o chute precisa estar entre ${menorValor} e ${maiorValor}</div>`;
        return;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `;
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long fa-beat fa-xl"></i></div>
        `;
    } else {
        elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long fa-beat fa-xl"></i></div>
        `;
    }

}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorOuMenorQueValorPermitido(numero) {
    return numero < menorValor || numero > maiorValor;
}

document.body.addEventListener("click", e => {
    if (e.target.id == "jogar-novamente") {
        window.location.reload();
    }
})