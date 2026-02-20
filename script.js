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
