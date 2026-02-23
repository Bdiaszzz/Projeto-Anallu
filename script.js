function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto de perfil modo claro")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto de perfil modo escuro")
  }
}

function createCandy() {
  const container = document.getElementById("candy-container")

  if (!container) return

  const candy = document.createElement("div")
  candy.classList.add("candy")

  const candies = ["🍬", "🍭", "🍫", "🍩", "🍪", "🧁"]
  candy.innerText = candies[Math.floor(Math.random() * candies.length)]

  candy.style.left = Math.random() * 100 + "vw"

  const duration = Math.random() * 5 + 5
  candy.style.animationDuration = duration + "s"

  container.appendChild(candy)

  setTimeout(() => {
    candy.remove()
  }, duration * 1000)
}

setInterval(createCandy, 600)
