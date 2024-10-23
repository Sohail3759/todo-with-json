let input = document.querySelector('.input');
let submit_button = document.querySelector('.submit-button');
let list = document.querySelector('.list');
let form = document.querySelector('.form-container');


form.addEventListener("submit", ((e)=>{
    e.preventDefault();
    let obj = {
        input : input.value
    }

    console.log(obj)
}))