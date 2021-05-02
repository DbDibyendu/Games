const cellElements = document.querySelectorAll('[data-cell]')

const restart = document.getElementById("rbutton")
restart.addEventListener("click", handleClick)

cellElements.forEach(cell => {
    cell.addEventListener("click", handleClick, { once: true })
})

function handleClick() {
    console.log('clicked')
}