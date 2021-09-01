const infoBCG = document.getElementById("infoBCG")
const infoPfizer = document.getElementById("infoPfizer")
const infoH1N1 = document.getElementById("infoH1N1")
const infoFebreAmarela = document.getElementById("infoFebreAmarela")
const infoPolio = document.getElementById("infoPolio")
const infoRotavirus = document.getElementById("infoRotavirus")

infoBCG.addEventListener('click', () =>{
    alert('A vacina BCG é dada quando se é bebezinho e fica marquinha no braço')
})

infoPfizer.addEventListener('click', () =>{
    alert('Ta passada?!')
})

infoH1N1.addEventListener('click', () =>{
    alert('A vacina H1N1 é dada para se proteger da gripe, muito importante')
})

infoFebreAmarela.addEventListener('click', () =>{
    alert('Vacina muito importante pra não ter febre nem ficar amarelo')
})

infoPolio.addEventListener('click', () =>{
    alert('Cadê o Zé Gotinha???')
})

infoRotavirus.addEventListener('click', () =>{
    alert('Tem que tomar essa pra não dar dor de barriga')
})