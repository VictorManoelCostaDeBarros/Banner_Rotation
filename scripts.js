let time = 5000,
    currentImagemIndex = 0,
    images = document.querySelectorAll('#slider img')
    max = images.length;

function nextImage() {

    images[currentImagemIndex].classList.remove("selected")

    currentImagemIndex++

    if(currentImagemIndex >= max) 
        currentImagemIndex = 0
    

    images[currentImagemIndex].classList.add("selected")
}


function start() {
    setInterval(()=>{
        // troca de imagem
        nextImage()
    }, time)
}

window.addEventListener('load', start)

