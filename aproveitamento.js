function calcular() {
    var notaum = Number(document.getElementById('notaumTxt').value)
    var notadois = Number(document.getElementById('notadoisTxt').value)
    var res = document.querySelector('#res')
    var media = (notaum + notadois) / 2

    if (media > 9 && media <= 10) {
        res.innerHTML = `Parabéns! Aproveitamento A`

    } if (media > 8 && media <= 9) {
        res.innerHTML = `Parabéns! Aproveitamento B`

    } if (media > 7 && media <= 8) {
        res.innerHTML = `Muito bem! Aproveitamento C`;
    } if (media > 6 && media <= 7) {
        res.innerHTML = `Precisa melhorar! Aproveitamento D`;
    } if (media > 5 && media <= 6) {
        res.innerHTML = `Precisa melhorar! Aproveitamento E`;
    } if (media <= 4) {
        res.innerHTML = `Precisa melhorar! Aproveitamento F`;
    }




}







