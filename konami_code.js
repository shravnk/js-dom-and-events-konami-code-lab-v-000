const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0


// const body = document.getElementById('body')
document.addEventListener('keydown', function (e) {
  const key = parseInt(e.detail || e.which)
  if (key === code[index]) {
    index++
    debugger
    if (index === code.length) {
      alert("Congratulations!")
      index = 0
    }
  } else {
    index = 0
  }
})
