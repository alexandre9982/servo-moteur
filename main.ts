let angle = 0
basic.forever(function () {
    for (let index = 0; index <= 16; index++) {
        angle = index * 10 + 10
        servos.P0.setAngle(angle)
        basic.pause(100)
    }
    for (let index = 0; index <= 32; index++) {
        angle = index * 5
        servos.P0.setAngle(170 - angle)
        basic.pause(100)
    }
})
