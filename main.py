angle = 0

def on_forever():
    global angle
    for index in range(11):
        angle = index * 10 + 10
        servos.P0.set_angle(angle)
        basic.pause(100)
    for index2 in range(6):
        pass
basic.forever(on_forever)
