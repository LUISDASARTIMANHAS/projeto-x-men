const personages = document.querySelectorAll(".personagem")
const linkSrc = "/src/imagens/card-"
const bacgroundAudio = new Audio("./src/X%20Men%20Evolution%201%C2%BA%20Abertura%20(128%20kbps).mp3")
const playStationIntro = new Audio("./src/play%20station%20intro.mp3")
const playStationSelecionar = new Audio("./src/audio%20play%20station%20Selecionar.mp3")

playStationIntro.play()
bacgroundAudio.play()
bacgroundAudio.loop = true
bacgroundAudio.volume = 0.05
personages.forEach(personagem => {
    personagem.addEventListener("mouseenter", () => {
        aoPassarDoMouse(personagem)
    })
})

function aoPassarDoMouse(personagem) {
    const personagemSelec = document.querySelector(".selecionado")
    const personagemGGIMG = document.querySelector(".personagem-GG-img")
    const personagemID = personagem.attributes.id.value
    const nomePersonagem = document.getElementById("nomePersonagem")
    const descricaoPersonagem = document.getElementById("descricaoPersonagem")
    const link = linkSrc + personagemID + ".png"

    if (window.innerWidth < 620) {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    playStationSelecionar.play()
    personagemSelec.classList.remove("selecionado")
    personagem.classList.add("selecionado")
    personagemGGIMG.src = link
    nomePersonagem.innerText = personagem.getAttribute("data-name")
    descricaoPersonagem.innerText = personagem.getAttribute("data-description")

    
}

