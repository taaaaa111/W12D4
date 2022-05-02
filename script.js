const apiKey = 'api_key=2dd6e7d30d5edc3100b5db13ac2104a0' ;
const baseUrl= 'https://api.themoviedb.org/3' ;

const apiUrl = baseUrl + '/movie/550?' + apiKey ;

getMovies(apiUrl);
function getMovies(url){

    fetch(url).then(res => res.json()).then(data =>{console.log(data);
})

}

