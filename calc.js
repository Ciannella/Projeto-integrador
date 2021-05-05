

function calcularRes() {
    const resposta = document.getElementById('rel_1')
    const tensao = document.getElementById('ten_1').value
    const corrente = document.getElementById('corr_1').value
    if (tensao == 0 || corrente == 0) {
        resposta.innerText = ' Atenção! Por favor preencha todos os campos'
    } else {
        const resistencia = tensao / corrente
        resposta.innerText = `${resistencia.toFixed(2)}`


    }


}







function calcularCor() {
    const resposta = document.getElementById('rel_2')
    const tensao = document.getElementById('ten_2').value
    const resistencia = document.getElementById('res_2').value
    console.log('entrou')
    if (tensao == 0 || resistencia == 0) {
        resposta.innerText = 'Atenção! Por favor preencha todos os campos'
    } else {
        const corrente = tensao / resistencia
        resposta.innerText = `${corrente.toFixed(2)}`
    }



}




function calcularTen() {
    const resposta = document.getElementById('rel_3')
    const corrente = document.getElementById('corr_3').value
    const resistencia = document.getElementById('res_3').value
    console.log('entrou')
    if (corrente == 0 || resistencia == 0) {
        resposta.innerText = 'Atenção! Por favor preencha todos os campos'
    } else {
        const tensao = resistencia * corrente
        resposta.innerText = `${tensao}`



    }

}




function calcularPot() {
    const corrente = document.getElementById('corr_4').value
    const tensao = document.getElementById('ten_4').value
    const resposta = document.getElementById('rel_4')

    if (corrente == 0 || tensao == 0) {
        resposta.innerText = 'Atenção! Por favor preencha todos os campos'
    } else {
        const watts = corrente * tensao
        resposta.innerText = `${watts}`

    }


}