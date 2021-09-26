const url = 'https://api.nasa.gov/planetary/apod?api_key=';
const api_key = 'WoGhgbdDufrY2DSk09YgcsrLmGOnyJReTJJG2wOl';

const getNASA = async() => {
    try {
        const response = await fetch(url + api_key);
        const data = await response.json();
        console.log('NASA APOD data', data);
        displayData(data);
    } catch (error) {
        console.log(error);
    }
}

const displayData = data => {
    document.body.style.cssText+=`background-image:url(${data.hdurl})`;
    document.body.style.cssText+=`background-position: center`; 
    document.getElementById('title').textContent = data.title;
    document.getElementById('date').textContent = data.date;
    document.getElementById('explanation').textContent = data.explanation;
}

getNASA();