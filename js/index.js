const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])



//Start of my code

//Nav - Anchors
const navAnchors = document.querySelectorAll('a');
navAnchors[0].textContent = 'Services';
navAnchors[1].textContent = 'Product';
navAnchors[2].textContent = 'Vision';
navAnchors[3].textContent = 'Features';
navAnchors[4].textContent = 'About';
navAnchors[5].textContent = 'Contact';

//Adding Images
const roundImage = document.getElementById('cta-img');
roundImage.src = 'img/header-img.png'

const rectImage = document.getElementById('middle-img')
rectImage.src = 'img/mid-page-accent.jpg'

//H1 'DOM IS AWESOME'
const h1Text = document.querySelector('h1');
h1Text.textContent = "DOM Is Awesome"

linebreak = document.createElement('br');
h1Text.appendChild(linebreak);

//Button stuff
const button = document.querySelector('button');
button.textContent = 'Get Started';

//all h4 elements 
const h4 = document.querySelectorAll('h4');
h4[0].textContent = 'FEATURES';
h4[1].textContent = 'ABOUT';
h4[2].textContent = 'SERVICES';
h4[3].textContent = 'PRODUCT';
h4[4].textContent = 'VISION';
h4[5].textContent = 'CONTACT';

//p text under the headings in the main body section
  //text for 'features'
const firstP = document.querySelector('.text-content p');
firstP.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metusscelerisque quis."
  //text for 'About'
const secondP = document.querySelector('.text-content:nth-of-type(2) p')
secondP.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  //text for 'Services'
const thirdP = document.querySelector('.bottom-content .text-content p')
thirdP.textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  //text for 'Product'
  const fourthP = document.querySelector('.bottom-content .text-content:nth-of-type(2) p')
  fourthP.textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  //text for 'Vision'
  const fifthP = document.querySelector('.bottom-content .text-content:nth-of-type(3) p')
  fifthP.textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

//contact info section
const contactAddress = document.querySelector('.contact p');
contactAddress.textContent = '123 Way 456 Street, Somewhere, USA';

const contactPhone = document.querySelector('.contact p:nth-of-type(2)')
contactPhone.textContent = "1 (888) 888-8888"

const contactEmail = document.querySelector('.contact p:nth-of-type(3)');
contactEmail.textContent = 'sales@greatidea.io'

//footer text
const footerText = document.querySelector('footer p');
footerText.textContent = "Copyright Great Idea! 2018";

//changing nav item  colors to green
const makeGreen = document.querySelectorAll('.container header nav a');
makeGreen.forEach(item => item.style.color = 'green');

//add an item to the beginning of the nav bar
const newNav1 = document.createElement('a')
newNav1.textContent = 'First Item'
const navContainer = document.querySelector('.container header nav')
navContainer.prepend(newNav1)
newNav1.style.color = 'green';
    //and another item at the end of the nav bar
const newNav2 = document.createElement('a');
newNav2.textContent = 'Last Item';
navContainer.appendChild(newNav2);
newNav2.style.color = 'green'