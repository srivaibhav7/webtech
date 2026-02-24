function press(value)
{
    let display = document.getElementById("display")
    display.value += value
    display.scrollLeft = display.scrollWidth
}

function calculate()
{
    let expression = document.getElementById("display").value

    if(expression == "")
    return

    try
    {
        let result = eval(expression)
        document.getElementById("display").value = result
    }
    catch
    {
        document.getElementById("display").value = "Error"
    }

    try
    {
        display.value = eval(expression)
        display.scrollLeft = display.scrollWidth
    }
    catch
    {
        display.value = "Error"
    }

}

function clearDisplay()
{
    document.getElementById("display").value = ""
}

function deleteLast()
{
    let current = document.getElementById("display").value
    document.getElementById("display").value =
    current.substring(0,current.length-1)
}