const   navToggler = document.querySelector('i.nav-toggler'),
        nav = document.querySelector('nav'),
        navLink = document.querySelectorAll('nav ul li a');

const changeBtn = bool => {
    [navToggler, nav].forEach(e => e.classList.toggle("active"));

    if(bool){
        navToggler.classList.replace('fa-close', 'fa-bars');
    }else{
        navToggler.classList.replace('fa-bars', 'fa-close');
    }
}

navToggler.onclick = () => changeBtn(navToggler.classList.contains('active'));

for(let i = 0; i < navLink.length; i++){
    navLink[i].onclick = () => changeBtn(navToggler.classList.contains('active'));
}