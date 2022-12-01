let imagen=document.querySelectorAll('.image')
// let imagen.classList.add('focus')


for (let i=0; 1<=8; i++){
    imagen[i].addEventListener('click',()=>{
        if(imagen[i].classList.contains('focus')==false){
            imagen[i].classList.add('focus')
        }else{
            imagen[i].classList.remove('focus')
        }
    })
}

