const btnToggle = document.querySelector('.btn-toggle');

btnToggle.addEventListener('click', () =>{

    const nav = document.getElementById("nav");
    
    if (nav.classList.contains('dark')){
        nav.classList.add('light')
        nav.classList.remove('dark')
        btnToggle.innerHTML = "Dark"

    } else if (nav.classList.contains('light')){

        nav.classList.add('dark')
        nav.classList.remove('light')
        btnToggle.innerHTML = "Light"

    }
})