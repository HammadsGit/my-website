// sliding navigation bar

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector(".NavBarList");
    const navLinks = document.querySelectorAll('.NavBarList li');

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');
    });

    navLinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = ``;
        }
        else{
            link.style.animation = `NavLinktransitions 0.5s ease forwards ${index / 7 + 1}s`;
        }
    });
    //animating links

}



const app = () =>{
    navSlide();
}



app();

