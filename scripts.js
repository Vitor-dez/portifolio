const navBar = document.querySelector('.navbar')
const allLi = document.querySelectorAll('li')



allLi.forEach((li, index) => {  //

    li.addEventListener("click", e =>{
        navBar.querySelector(".active-list").classList.remove("active-list")
        li.classList.add("active-list")
        const indicator = document.querySelector(".indicator")
    indicator.style.transform = `translateX(calc(${index * 90}px))`
    
    })  

});


const btnMobile = document.getElementById('btn-mobile')// Função do menu responsivo onde o mesmo se adapta aqualquer aparelho.  

function toggleMenu() {
    
const nav = document.getElementById('nav')
nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);




