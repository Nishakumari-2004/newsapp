const API_KEY = "7f9a561fad824bdab119e475abc852e3"
const url = " http://newsapi.org/s/india-news-api"
    // const generalBtn = document.getElementById("general")
    // const sportsBtn = document.getElementById("sports")
    // const businessBtn = document.getElementById("business")
    // const technologyBtn = document.getElementById("technology")
    // const healthBtn = document.getElementById("health")
    // const politicsBtn = document.getElementById("politics")
const country = "us"

window.addEventListener("load", () =>
    fetchGeneralNews()

)

const cardsContainer = document.getElementById("card-container")
ihtml = ""


const bindData1 = (articles) => {
    ihtml = '';
    for (let item of articles) {
        if (item.urlToImage) {
            ihtml += `
    <div class="card">
            <img src="${item.urlToImage}" class="card-img-top" alt="news-image" id="news-img">

            <div class="card-body">
            
                <h5 class="card-title"id="news-title">${item.title} </h5>
                <p class="card-text" id="news-description">${item.description}</p>
                <a href="${item.url}" class="btn btn-primary">Continue reading</a>
            </div>
        </div>`
            cardsContainer.innerHTML = ihtml
        }
    }
}
const bindData2 = (articles) => {
    ihtml = '';
    for (let item of articles) {
        if (item.urlToImage) {
            ihtml += `
    <div class="card">
            <img src="${item.urlToImage}" class="card-img-top" alt="news-image" id="news-img">

            <div class="card-body">
            
                <h5 class="card-title"id="news-title">${item.title} </h5>
                <p class="card-text" id="news-description">${item.description}</p>
                <a href="${item.url}" class="btn btn-primary">Continue reading</a>
            </div>
        </div>`
            cardsContainer.innerHTML = ihtml
        }
    }
}
const bindData3 = (articles) => {
    ihtml = '';
    for (let item of articles) {
        if (item.urlToImage) {
            ihtml += `
    <div class="card">
            <img src="${item.urlToImage}" class="card-img-top" alt="news-image" id="news-img">

            <div class="card-body">
            
                <h5 class="card-title"id="news-title">${item.title} </h5>
                <p class="card-text" id="news-description">${item.description}</p>
                <a href="${item.url}" class="btn btn-primary">Continue reading</a>
            </div>
        </div>`
            cardsContainer.innerHTML = ihtml
        }
    }
}
const bindData4 = (articles) => {
    ihtml = '';
    for (let item of articles) {
        if (item.urlToImage) {
            ihtml += `
    <div class="card">
            <img src="${item.urlToImage}" class="card-img-top" alt="news-image" id="news-img">

            <div class="card-body">
            
                <h5 class="card-title"id="news-title">${item.title} </h5>
                <p class="card-text" id="news-description">${item.description}</p>
                <a href="${item.url}" class="btn btn-primary">Continue reading</a>
            </div>
        </div>`
            cardsContainer.innerHTML = ihtml
        }
    }
}
const bindData5 = (articles) => {
    ihtml = '';
    for (let item of articles) {
        if (item.urlToImage) {
            ihtml += `
    <div class="card">
            <img src="${item.urlToImage}" class="card-img-top" alt="news-image" id="news-img">

            <div class="card-body">
            
                <h5 class="card-title"id="news-title">${item.title} </h5>
                <p class="card-text" id="news-description">${item.description}</p>
                <a href="${item.url}" class="btn btn-primary">Continue reading</a>
            </div>
        </div>`
            cardsContainer.innerHTML = ihtml
        }
    }
}
const bindData6 = (articles) => {
    ihtml = '';
    for (let item of articles) {
        if (item.urlToImage) {
            ihtml += `
    <div class="card">
            <img src="${item.urlToImage}" class="card-img-top" alt="news-image" id="news-img">

            <div class="card-body">
            
                <h5 class="card-title"id="news-title">${item.title} </h5>
                <p class="card-text" id="news-description">${item.description}</p>
                <a href="${item.url}" class="btn btn-primary">Continue reading</a>
            </div>
        </div>`
            cardsContainer.innerHTML = ihtml
        }
    }
}



general.addEventListener("click", function() {
    fetchGeneralNews();
})
sports.addEventListener("click", function() {
    fetchSportsNews();
})
business.addEventListener("click", function() {
    fetchBusinessNews();
})
health.addEventListener("click", function() {
    fetchHealthNews();
})
entertainment.addEventListener("click", function() {
    fetchEntertainmentNews();
})
politics.addEventListener("click", function() {
    fetchPoliticsNews();
})
const fetchGeneralNews = async() => {
    let response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=7f9a561fad824bdab119e475abc852e3`);
    if ((!response.ok)) {
        return false;
    }
    let generaldata = await response.json();

    console.log(generaldata.articles)
    bindData1(generaldata.articles);

}
const fetchSportsNews = async() => {

    let response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=7f9a561fad824bdab119e475abc852e3`);
    if ((!response.ok)) {
        return false;
    }
    let sportsdata = await response.json();
    console.log(sportsdata.articles);
    bindData2(sportsdata.articles);

}

const fetchBusinessNews = async() => {

    let response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=business&apiKey=${API_KEY}`);
    if ((!response.ok)) {
        return false;
    }
    let businessdata = await response.json();
    console.log(businessdata.articles);
    bindData3(businessdata.articles);


}
const fetchHealthNews = async() => {

    let response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=health&apiKey=${API_KEY}`);
    if ((!response.ok)) {
        return false;
    }
    let healthdata = await response.json();
    console.log(healthdata.articles);
    bindData4(healthdata.articles);


}
const fetchEntertainmentNews = async() => {

    let response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=entertainment&apiKey=${API_KEY}`);
    if ((!response.ok)) {
        return false;
    }
    let entertainmentdata = await response.json();
    console.log(entertainmentdata.articles);
    bindData5(entertainmentdata.articles);


}
const fetchPoliticsNews = async() => {

    let response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=politics&apiKey=${API_KEY}`);
    if ((!response.ok)) {
        return false;
    }
    let politicsdata = await response.json();
    console.log(politicsdata.articles);
    bindData6(politicsdata.articles);


}