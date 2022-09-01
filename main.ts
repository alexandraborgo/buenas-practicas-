input.onButtonPressed(Button.A, function () {
    Número += 1
    basic.showNumber(Número)
})
input.onButtonPressed(Button.B, function () {
    Número += -1
    basic.showNumber(Número)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString(Text)
})
let Número = 0
let Text = ""
Text = "hello"
Número = 0
basic.forever(function () {
	
})
