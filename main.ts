input.onButtonPressed(Button.A, function () {
    go = 1
})
input.onButtonPressed(Button.B, function () {
    go = 0
})
let go = 0
rekabitUltrasonic.setUltrasonicTrigEcho(RekabitUltrasonicIOPins.p0_p1)
rekabitBigLED.setBigLed(RekabitPortYellowPin.P13, rekabitBigLED.digitalStatePicker(RekabitDigitalIoState.On))
rekabitBigLED.setBigLed(RekabitPortYellowPin.P15, rekabitBigLED.digitalStatePicker(RekabitDigitalIoState.On))
go = 0
basic.forever(function () {
    if (rekabitUltrasonic.compareDistance(RekabitAnalogCompareType.LessThan, 10)) {
        rekabit.setServoPosition(ServoChannel.S1, 90)
    } else {
        rekabit.setServoPosition(ServoChannel.S1, 180)
    }
})
