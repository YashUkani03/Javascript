const form = document.querySelector('.form')
let guesses = document.querySelector('.guesses')
let result = document.querySelector('.result')
let remaining = document.querySelector('.remaining')

let counter = 0
const random = parseInt(Math.random() * 100);
let preArr = [];

function validate(guess) {
    if (guess > 100 || isNaN(guess) || guess < 0) {
        alert("Wrong Input")
    }
    else{
        game(guess)
    }
}

function game(guess) {
    preArr.push(guess)
    counter++
    guesses.append(`${preArr[counter - 1]}, `)
    if (guess > random) {
        result.innerHTML = "Value is Higher"
    }
    else if (guess < random) {
        result.innerHTML = "Value is Lower"
    }
    else if (guess == random) {
        result.innerHTML = "Correct"
    }
    remaining.innerHTML = 10 - counter
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let guess = document.querySelector('#guessName').value
    validate(guess)
})



// console.log(ele)
// form.forEach(function (pre) {
//     console.log(pre.target.id);
// });

// ----- EVENT TO STORE PREVIOUS ELEMENTS IN ARRAY -----
// function validate(ele) {
//     ele = document.querySelector("#guessName").value
//     if (ele > 100 || isNaN(ele) || ele < 0) {
//         result.innerHTML = " Wrong Input "
//         guesses.innerHTML = ""
//     }
// }

// form.addEventListener('submit', function (pre) {
//     pre.preventDefault()
//     counter++
//     let remain = 10 - counter
//     if (counter <= 10) {
//         const ele = document.querySelector("#guessName").value
//         pre.preventDefault();
//         // console.log(ele);
//         // console.log(counter);
//         preArr.push(ele)
//         guesses.append(`${preArr[counter - 1]}, `)

//         if (ele > random) {
//             result.innerHTML = "Value is Higher"
//         }
//         else if (ele < random) {
//             result.innerHTML = "Value is Lower"
//         }
//         else if (ele == random) {
//             result.innerHTML = "Correct"
//         }
//         validate()
//     }
//     remaining.innerHTML = `${remain}`
// })


// console.log(random.toFixed(0));