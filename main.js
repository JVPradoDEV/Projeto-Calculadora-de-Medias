const form = document.getElementById("form-insert");
const imgAprovado = `<img src="https://images.emojiterra.com/openmoji/v14.0/512px/2714.png" alt="Emoji Aprovado" />`
const imgReprovado = `<img src="https://images.emojiterra.com/openmoji/v13.1/512px/274c.png" alt="Emoji Reprovado" />`
const spanAprovado = `<span class="resultado aprovado">Aprovado</span>`
const spanReprovado = `<span class="resultado reprovado">Reprovado</span>`
const atividades = [];
const notas = [];
const notaMinima = parseFloat(prompt("Digite a nota mínima:"));

let linhas = "";


form.addEventListener("submit", function (e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
})

function adicionaLinha() {

    const inputNomeAtividade = document.getElementById("nomeatividade");
    const inputNotaAtividade = document.getElementById("notaatividade");

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade: ${inputNomeAtividade.value} já foi inserida!`)
        preventDefault;
    } else {
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
    
        let linha = "<tr>";
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += `</tr>`;
    
        linhas += linha;
    }

    inputNomeAtividade.value = "";
    inputNotaAtividade.value = "";

}

function atualizaTabela() {
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById("media-final-valor").innerHTML = mediaFinal;
    document.getElementById("media-final-resultado").innerHTML = mediaFinal >= notaMinima  ? spanAprovado : spanReprovado;
}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
}