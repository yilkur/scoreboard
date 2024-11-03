let homeScore = 0
let guestScore = 0

const displayHome = document.querySelector('.display.home span')
const displayGuest = document.querySelector('.display.guest span')

const initGame = () => {
  homeScore = 0
  guestScore = 0
  displayHome.textContent = homeScore
  displayGuest.textContent = guestScore
}

initGame()

document.addEventListener('click', e => {
  const targetClass = e.target.className
  const score = Number(e.target.textContent)
  const isButton = e.target.tagName == 'BUTTON'

  if (targetClass === 'new-game') {
    initGame()
  } else if (Number.isInteger(score) && isButton) {
    if (targetClass.includes('home')) {
      homeScore += score
      displayHome.textContent = homeScore
    } else {
      guestScore += score
      displayGuest.textContent = guestScore
    }
  }
})
