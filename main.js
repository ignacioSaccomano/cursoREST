const API_URL = 'https://api.thedogapi.com/v1/images/search?api_key=live_fti1EGcHFCqEDBCI4oco9zzZZGClViWfMSK8CoDHNPo0oR5ZJvKmmi4hIMHgXt22'
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