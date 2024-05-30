const url = 'https://api.nasa.gov/planetary/apod?api_key='
const Nasa_api_key = config.NASA_API_KEY

const fetchNASA = async () => {
    try {
        const a = await fetch(`${url}${Nasa_api_key}`)
        const data = await a.json()
        console.log('NASA APOD data', data)
        displayData(data) 
    } catch (error) {
        console.log(error)
    }
}

const displayData = data => {
    document.getElementById('title').textContent = data.title
    document.getElementById('date').textContent = data.date
    document.getElementById('picture').src = data.hdurl
    document.getElementById('description').textContent = data.explanation
}

fetchNASA()