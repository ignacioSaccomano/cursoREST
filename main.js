const API_URL = 'https://api.thedogapi.com/v1/images/search?api_key=live_fti1EGcHFCqEDBCI4oco9zzZZGClViWfMSK8CoDHNPo0oR5ZJvKmmi4hIMHgXt22'
const imageWrapper = document.querySelector('.imagecontainer')
const boton = document.getElementById('boton')
const img = document.querySelectorAll('img')
const number_input = document.getElementById('input-perros')

// setInterval(() => {
//     fetch(URL)
//         .then(res => res.json())
//         .then(data => {
//             imagen.src = data[0].url
//         })
// }, 2000)

async function fetchImage() {
    const resultado = await fetch(API_URL)
    const data = await resultado.json()
    return data[0].url
}

function makeImages(amount) {
    let remaining = amount - imageWrapper.children.length
    for (let i = 0; i < remaining; i++) {
        let foto = document.createElement('img')
        fetchImage().then(el => foto.src = el)
        imageWrapper.appendChild(foto)
        
    }

}

boton.addEventListener('click', () => {
    makeImages(parseInt(number_input.value))
})

