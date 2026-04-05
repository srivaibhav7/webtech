function press(value)
{
    let display = document.getElementById("display")
    display.value += value
    display.scrollLeft = display.scrollWidth
}

function clearDisplay()
{
    let display = document.getElementById("display")
    display.value = ""
}

function deleteLast()
{
    let display = document.getElementById("display")
    display.value = display.value.slice(0, -1)
}