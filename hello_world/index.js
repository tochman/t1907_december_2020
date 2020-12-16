// var lastName = 'Lindblom'

const buttonClickHandler = () => {
  alert('Du klickade på knappen')
}
 lastName = 'Lindblom'
document.addEventListener('DOMContentLoaded', () => {
  let displayGreetingElement = document.getElementById('display')
  displayGreetingElement.innerHTML = `<h1>Hello Niclas ${lastName}</h1>`
  displayGreetingElement.children[0].classList.add('greeting')
  // let button = document.getElementById('knapp')
  // button.addEventListener('click', buttonClickHandler)
})