const buttonmenu = document.querySelector('.buttonmenu')
const dropdownmenu__navlist = document.querySelector('.dropdownmenu__navlist')

buttonmenu.addEventListener('click',()=>{
    dropdownmenu__navlist.classList.toggle('active')
})



