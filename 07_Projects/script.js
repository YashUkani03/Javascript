const start = document.querySelector('#start')
const stop = document.querySelector('#stop')

let change;

// start.addEventListener('click', function () {
//     change = setInterval(() => {
//         let rand = (Math.random() * 100000 + 100000).toFixed(0)
//         let hex = "#"
//         hex += rand
//         document.body.style.backgroundColor = hex
//     }, 1000)
// });

let random = ()=> {
    let hex = "0123456789abcdef"
    let hexstr = "#"
    for (let i = 0; i < 6; i++) {
        hexstr = hexstr + hex[Math.floor(Math.random()*16)]        
    }
    return hexstr
} 

console.log(random());
start.addEventListener('click',() => {
    setInterval(() => {
        document.body.style.backgroundColor = random()
    }, 1000);
})

stop.addEventListener('click', function () {
    clearInterval(change);
})