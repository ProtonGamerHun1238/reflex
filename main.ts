input.onButtonPressed(Button.A, function () {
    a_pont += 1
    basic.showNumber(a_pont)
    basic.pause(200)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    while (futaaaaaaaaaaaaaaas == false || (a_pont > 10 || b_pont > 10)) {
        basic.showNumber(3)
        basic.showNumber(2)
        basic.showNumber(1)
        futaaaaaaaaaaaaaaas = false
        basic.pause(500)
        led.plot(randint(0, 4), randint(0, 4))
        futaaaaaaaaaaaaaaas = true
    }
})
input.onButtonPressed(Button.B, function () {
    b_pont += 1
    basic.showNumber(b_pont)
    basic.pause(200)
    basic.clearScreen()
})
let futaaaaaaaaaaaaaaas = false
let b_pont = 0
let a_pont = 0
a_pont = 0
b_pont = 0
