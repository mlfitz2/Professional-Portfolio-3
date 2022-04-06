const aboutMeBtn = document.getElementById('about-me-btn');
const myPortfolioBtn = document.getElementById('portfolio-btn');
const contactMeBtn = document.getElementById('contact-me-btn');
const aboutMe = document.getElementById('about-me');
const myPortfolio = document.getElementById('my-portfolio');
const contactMe = document.getElementById('contact-me');
const intro = document.getElementById('intro');

const pubCrawlerBtn = document.getElementById('pubcrawler');
const pubCrawler = document.getElementById('pubcrawler-page');
const happyPlaceBtn = document.getElementById('happy-place');
const happyPlace = document.getElementById('happy-place-page');
const noteTakerBtn = document.getElementById('note-taker');
const noteTaker = document.getElementById('note-taker-page');


//Renders About Me section
function showAboutMe() {
    intro.setAttribute('class', 'hidden');
    myPortfolio.setAttribute('class', 'hidden');
    contactMe.setAttribute('class', 'hidden');
    aboutMe.removeAttribute('class', 'hidden');
    happyPlace.setAttribute('class', 'hidden');
    pubCrawler.setAttribute('class', 'hidden');
    noteTaker.setAttribute('class', 'hidden');

    aboutMeBtn.setAttribute('class', 'nav-btn selected');
    myPortfolioBtn.setAttribute('class', 'nav-btn');
    contactMeBtn.setAttribute('class', 'nav-btn');
}

//Renders portfolio
function showMyPortfolio() {
    intro.setAttribute('class', 'hidden');
    myPortfolio.removeAttribute('class', 'hidden');
    contactMe.setAttribute('class', 'hidden');
    aboutMe.setAttribute('class', 'hidden');
    happyPlace.setAttribute('class', 'hidden');
    pubCrawler.setAttribute('class', 'hidden');
    noteTaker.setAttribute('class', 'hidden');

    aboutMeBtn.setAttribute('class', 'nav-btn');
    myPortfolioBtn.setAttribute('class', 'nav-btn selected');
    contactMeBtn.setAttribute('class', 'nav-btn');
}

//Renders Contact Me section
function showContactMe() {
    intro.setAttribute('class', 'hidden');
    myPortfolio.setAttribute('class', 'hidden');
    contactMe.removeAttribute('class', 'hidden');
    aboutMe.setAttribute('class', 'hidden');
    happyPlace.setAttribute('class', 'hidden');
    pubCrawler.setAttribute('class', 'hidden');
    noteTaker.setAttribute('class', 'hidden');
    
    aboutMeBtn.setAttribute('class', 'nav-btn');
    myPortfolioBtn.setAttribute('class', 'nav-btn');
    contactMeBtn.setAttribute('class', 'nav-btn selected');
}

//Renders PubCrawler page
function showPubCrawler() {
    myPortfolio.setAttribute('class', 'hidden');
    pubCrawler.removeAttribute('class', 'hidden');
}

//Renders Happy Place page
function showHappyPlace() {
    myPortfolio.setAttribute('class', 'hidden');
    happyPlace.removeAttribute('class', 'hidden');
}

//Renders Note Taker page
function showNoteTaker() {
    myPortfolio.setAttribute('class', 'hidden');
    noteTaker.removeAttribute('class', 'hidden');
}





//Event listener: About Me section
aboutMeBtn.addEventListener('click', function() {
    showAboutMe();
});

//Event listener: Portfolio section
myPortfolioBtn.addEventListener('click', function() {
    showMyPortfolio();
})

//Event listener: Contact Me section
contactMeBtn.addEventListener('click', function(){
    showContactMe();
})

//Event listener: show pubcrawler page
pubCrawlerBtn.addEventListener('click', function() {
    showPubCrawler();
})

//Event listener: show workday planner page
noteTakerBtn.addEventListener('click', function() {
    showNoteTaker();
})

//Event listener: show The Happy Place page
happyPlaceBtn.addEventListener('click', function() {
    showHappyPlace();
})