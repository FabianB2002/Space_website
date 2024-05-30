let searchBtn = document.getElementById("search-btn");

let url = 'https://api.api-ninjas.com/v1/stars?name='

let a = {
    method: 'GET',
    headers: { 'x-api-key': '3bndD4C9MSqSIAJ6JEsFOg==Y6yyB1QJl3hNYCcp'}
}
searchBtn.addEventListener("click", () =>{
    const search = document.getElementById('query').value

    async function getJSON(url) {
        let result = JSON.parse(localStorage.getItem(url));
        if (!result) {
            const res = await fetch(url,a);
            result= await res.json();
            localStorage.setItem(url, JSON.stringify(result));
        }
        return result;
        
    }
        
    async function getAPI(endpoint) {
        const url =  `${baseURL}${endpoint}`
        return getJSON(url);
    }
    
    const baseURL = 'https://api.api-ninjas.com/v1/stars?name='
    
    async function loadSearch(query) {
        const response = await fetch(`${baseURL}${query}`);
        return response.json();
    }
    
    async function doSearch() {
        const result = await loadSearch(query.value);
    }
    const name = doSearch();
    
    function toText(tag, text) {
        const el = document.createElement(tag);
        el.textContent = text;
        return el;
    }
    
    function starsArticle (star) {
        console.log(star);
        const article = document.createElement('article');
        const name = toText('name',star.name);
        const dl = document.createElement('dl')
        for(const key of ['absolute_magnitude','apparent_magnitude','constellation','declination',
        'distance_light_year','right_ascension','spectral_class']) {
            const dt = toText('dt', key);
            const dd = toText('dd', star[key]);
            dl.append(dt,dd);
        }
        article.append(name,dl);
        return article;
    
    }

    async function go() 
    {
        clearResults();
        const data = await getAPI(search);
        const articles = data.map(starsArticle);
        stars.append(...articles);
    }

    function clearResults() {
        while(stars.firstChild) {
            stars.firstChild.remove();
        }
    }
    
    go();

});