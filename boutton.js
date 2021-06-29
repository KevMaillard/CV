const btnToggle = document.querySelector('.btn-toggle');

btnToggle.addEventListener('click', () => {

const nav = document.nav;

if(nav.classlist.contains('dark')){

    nav.classlist.add('light')
    nav.classlist.remove('dark')
    btnToggle.innerHTML = "Dark"

} else if(nav.classlist.contains('light')){

    nav.classlist.add('dark')
    nav.classlist.remove('light')
    btnToggle.innerHTML = "light"

})