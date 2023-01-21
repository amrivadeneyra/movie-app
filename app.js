const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2d3e7b9fadmsh951c0761b71fec7p145d7ajsna55ac07edbb5',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

fetch('https://imdb8.p.rapidapi.com/auto-complete?q=avengers', options)
	.then(response => response.json())
    .then(data => {
        //console.log(data)
        const arrayMovie = data.d
        //console.log(arrayMovie)
        arrayMovie.map((element) => {
            //console.log(element)
            const title = element.l
            //console.log(title)
            const image = element.i.imageUrl
            //console.log(image)
            const cast = element.s
            const poster = `
                <div>
                    <img src="${image}"/>
                    <h2>${title}</h2>
                    <small>${cast}</small>
                    <button></button>
                </div>
                `
                document.getElementById('container').innerHTML += poster
        })
    })
	.catch(err => {
        console.error(err)
    });