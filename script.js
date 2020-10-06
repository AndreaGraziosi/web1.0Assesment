
// headline element
const display = document.querySelector("#display")
// input field size
const inputSize = document.querySelector("#input-size")
const showSize = document.querySelector("#show-size")

const selectFont = document.querySelector("#select-font")
const showFont = document.querySelector("#show-font")

const inputColor = document.querySelector("input-color")
const showColor = document.querySelector("#show-color")

const inputBgColor = document.querySelector("enter_bg_color")
const showBgColor = document.querySelector("show-bg-color")

const enterText = document.querySelector("#enter-text")



inputSize.addEventListener("input", handleInput)
selectFont.addEventListener("select", handleInput)
inputColor.addEventListener("input", handleInput)
inputBgColor.addEventListener("input", handleInput)
enterText.addEventListener("input",handleInput)
 
function handleInput() {
     const fontSize = inputSize.value
     display.style.fontSize = fontSize
     showSize.innerHTML = fontSize

    const fontType = selectFont.value
    display.style.fontType = fontType
    showFont.innerHTML = fontType

    const fontColor = inputColor.value
    display.style.fontColor = fontColor
    showColor.innerHTML = fontColor

    const bgColor = inputBgColor.value
    display.style.bgColor = bgColor
    showBgColor.innerHTML = bgColor

    const diplayText = enterText.value
    display.style.displayText = displayText
    display.innerHTML = displayText

 }

