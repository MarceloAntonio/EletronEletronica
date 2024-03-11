function validacaolgn() {
  let senha = document.getElementById("senha").value
  let user = document.getElementById("user").value

  if (user === "Luciano" && senha === "amoavana") {
    window.location.href = "home.html"
    return
  }

  if (user === "Marcelo" && senha === "amoahely") {
    window.location.href = "home.html"
    return
  }
  alert("falha no login")
}

function changeSection(sectionId) {
  // Oculta todas as seções
  const sections = document.querySelectorAll(".section")
  sections.forEach((section) => section.classList.remove("active"))

  // Ativa a seção desejada
  const activeSection = document.getElementById(sectionId)
  activeSection.classList.add("active")
}
