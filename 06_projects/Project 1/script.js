const btns = document.querySelectorAll('.button') 
const body = document.querySelector("body")

btns.forEach(function(button) {
    // console.log(button);
    button.addEventListener('click', function(color){
        console.log(color.target)
        // if(color.target.id === "yellow"){
        //     body.style.backgroundColor = 'yellow'
        // } 
        switch (color.target.id) {
            case "yellow":
                body.style.backgroundColor = color.target.id
                break;
            case "white":
                body.style.backgroundColor = color.target.id
                break;
            case "Red":
                body.style.backgroundColor = color.target.id
                break;
            case "pink":
                body.style.backgroundColor = color.target.id
                break;    
            default:
                break;
        }
    })
});