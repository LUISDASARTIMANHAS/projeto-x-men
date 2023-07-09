const personages = document.querySelectorAll(".personagem")
const linkSrc = "/src/imagens/card-"

personages.forEach(personagem => {
    personagem.addEventListener("mouseenter", () => {
        aoPassarDoMouse(personagem)
    })
})

function aoPassarDoMouse(personagem) {
    const personagemSelec = document.querySelector(".selecionado")
    const personagemGGIMG = document.querySelector("personagem-GG-img")
    const personagemID = personagem.attributes.id.value
    const nomePersonagem = document.getElementById("nomePersonagem")
    const descricaoPersonagem = document.getElementById("descricaoPersonagem")
    const link = linkSrc + personagemID + ".png"

    console.log(link)
    if (window.innerWidth < 620) {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
    personagemSelec.classList.remove("selecionado")
    personagem.classList.add("selecionado")
    personagemGGIMG.src = link
    nomePersonagem.innerText = personagem.getAttribute("data-name")
    descricaoPersonagem.innerText = personagem.getAttribute("data-description")

    
}

