const start = document.querySelector('#start')
const stop = document.querySelector('#stop')

let RandomColor = function () {
    const hex = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}


// console.log(RandomColor())
start.addEventListener('click', () => {
    setInterval(() => {
        document.body.style.backgroundColor = RandomColor()
    }, 1000)
})

stop
