const form = document.querySelector("form")

form.addEventListener('submit', function(event){
    event.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')
    const mass = document.querySelector('#mass')

    if (height < 0 || height == "" || isNaN(height)) {
        // result.appendChild(`Wrong input : ${height}`)
        result.innerHTML = `<span> Wrong input : ${height} </span>`
        console.log(height);
    }
    else if (weight < 0 || weight == "" || isNaN(weight)) {
        // result.appendChild(`Wrong input : ${weight}`)
        result.innerHTML = `<span>Wrong input : ${weight}</span>`
    }
    else{
        // result.appendChild((weight / (height*height)/10000).toFixed(2))
        const res = (weight / (height*height)*10000).toFixed(2)
        result.innerHTML = `Result = ${res}`
        if (res < 18) {
            mass.innerHTML = `Underweight`
        }
        else if (res >= 18 && res <= 25) {
            mass.innerHTML = `Normal`
        }
        else if (res > 25) {
            mass.innerHTML = `Overweight`
        }
    }

    
    
})