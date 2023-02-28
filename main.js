const API_URL = 'https://api.thecatapi.com/v1/images/search?api_key=live_hjliulG8Dxyr2ikhnseZQ70fG4DPHVlN9T2U3hxuUnkU98LhYqVKt0KrpZ3mkRde'
const imagen = document.querySelector('img')
const boton = document.getElementById('boton')

// setInterval(() => {
//     fetch(URL)
//         .then(res => res.json())
//         .then(data => {
//             imagen.src = data[0].url
//         })
// }, 2000)

async function reload() {
    const resultado = await fetch(API_URL)
    const data = await resultado.json()
    imagen.src = data[0].url
}

reload()