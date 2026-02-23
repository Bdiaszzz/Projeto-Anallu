function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Pegar a tag da imagem
  const img = document.querySelector("#profile img")

  // Substituir a imagem
  if (html.classList.contains("light")) {
    // Se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto de perfil modo claro")
  } else {
    // Se tiver dark mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto de perfil modo escuro")
  }
}
// Remova a linha 'const container = ...' que estava fora das funções

function createCandy() {
  // Coloque a busca do container aqui dentro
  const container = document.getElementById("candy-container")

  // Se o container ainda não existir na tela, não faz nada (evita o erro no console)
  if (!container) return

  const candy = document.createElement("div")
  candy.classList.add("candy")

  const candies = ["🍬", "🍭", "🍫", "🍩", "🍪", "🧁"]
  candy.innerText = candies[Math.floor(Math.random() * candies.length)]

  candy.style.left = Math.random() * 100 + "vw"
  const duration = Math.random() * 10 + 10
  candy.style.animationDuration = duration + "s"
  candy.style.fontSize = Math.random() * 1.5 + 1 + "rem"

  container.appendChild(candy)

  setTimeout(() => {
    candy.remove()
  }, duration * 1000)
}

setInterval(createCandy, 600)
