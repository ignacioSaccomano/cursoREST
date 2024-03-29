const API_URL = 'https://api.thedogapi.com/v1/images/search'
const API_KEY = 'api_key=live_fti1EGcHFCqEDBCI4oco9zzZZGClViWfMSK8CoDHNPo0oR5ZJvKmmi4hIMHgXt22'
const imageWrapper = document.querySelector('.imagecontainer')
const boton = document.getElementById('boton')
const img = document.querySelectorAll('img')
const number_input = document.getElementById('input-perros')

async function fetchImage() {
    const resultado = await fetch(API_URL)
    const data = await resultado.json()
    return data[0].url
}

function makeImages(amount) {
    let currentPets = imageWrapper.children.length
    let remaining = amount - currentPets
    if(remaining < 0) {
        for(let i = currentPets; i > amount; i--) {
            imageWrapper.removeChild(imageWrapper.lastChild)
        }
    }
    for (let i = 0; i < remaining; i++) {
        let foto = document.createElement('img')
        fetchImage().then(el => foto.src = el)
        imageWrapper.appendChild(foto)
        
    }

}

boton.addEventListener('click', () => {
    (number_input.value >= 1 && number_input.value <= 10) ? makeImages(parseInt(number_input.value)) : alert('El numero de fotos debe estar entre 1 y 3')
})

fetchImage().then(el => document.body.style.backgroundImage = "url('" + el + "')")

makeImages(1)