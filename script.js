

/*Cuando hago CLICK .button, .nav TOOGLE 'activo'*/
const buttonmenu = document.querySelector('.buttonmenu')
const dropdownmenu__navlist = document.querySelector('.dropdownmenu__navlist')

buttonmenu.addEventListener('click',()=>{
    dropdownmenu__navlist.classList.toggle('active')
})

const buttonclosemenu = document.querySelector('.buttonclosemenu')
buttonclosemenu.addEventListener('click',()=>{
buttonclosemenu.classList.toggle('.inactive')
})