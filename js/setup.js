$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


// menu 

window.addEventListener('scroll', (x) => {
    if(window.scrollY > 70){
        document.querySelector('.header-page').classList.add('fixed');
    }else{
        document.querySelector('.header-page').classList.remove('fixed');
    }
})

function initilizeEvents() {
    
    const itemGallery = document.querySelectorAll('.galeria-item');

    itemGallery.forEach(element => {
        
        element.addEventListener('click',(evt) => {
            
            changeBkg(evt.target.getAttribute('data-img-name'));

        })

    });

}



//galeria
const images = ['ponto-cego','ponto-cego-1','ponto-cego-2','ponto-cego-3','ponto-cego-4']

const container_gallery = document.querySelector('.galeria-box')
container_gallery.addEventListener('mouseover', () => {
    container_gallery.setAttribute('style','overflow:auto');
})

container_gallery.addEventListener('mouseout', () => {
    container_gallery.setAttribute('style','overflow:hidden');
})

/**
 * cria os boxes para inserção de uma imagem na galeria do banner
 */
function makeGallery() {
    
    const images_gallery = images.reverse()
    
    images_gallery.forEach(element => {
        
        var element_model = '<div class=\"galeria-item\" data-img-name=\"' + element + '\" style=\"background-image:url(\'\u002Fimg\u002F' + element + '.jpg\')">';

        document.querySelector('.galeria-item').insertAdjacentHTML('beforebegin', element_model);

    });
} 


/**
 * trocar fundo do banner
 */

function changeBkg (imageName) {
    
    const bannerItem = document.querySelector('.banner-item');

    bannerItem.setAttribute('style','background-image:url(\'\u002Fimg\u002F' + imageName + '.jpg\')')

    console.log(imageName);

}


makeGallery()
initilizeEvents()