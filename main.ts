let distancia = 0
basic.forever(function () {
    music.setVolume(125)
    distancia = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P0,
    PingUnit.MicroSeconds
    )
    if (distancia < 10) {
        music.ringTone(262)
    } else if (distancia < 20) {
        music.ringTone(392)
    } else if (distancia < 30) {
        music.ringTone(587)
    } else if (distancia < 40) {
        music.ringTone(988)
    } else if (distancia < 50) {
        music.ringTone(165)
    } else if (distancia < 60) {
        music.ringTone(262)
    } else if (distancia < 70) {
        music.ringTone(370)
    } else if (distancia < 80) {
        music.ringTone(196)
    }
})
