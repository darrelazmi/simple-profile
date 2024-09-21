function NavHide(){
    if(window.innerWidth <= 640){
        document.getElementById('menu').style.display = "none"
    } else{
        document.getElementById('menu').style.display = "flex"
    }
}
window.addEventListener('resize',NavHide)