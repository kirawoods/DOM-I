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

//Select and add content to nav menu 
const navItems = document.querySelectorAll('nav a');  

const navitem1 = navItems[0]; 
  navitem1.innerText = siteContent["nav"]["nav-item-1"]; 
  navitem1.style.color = 'green'; 

const navitem2 = navItems[1]; 
  navitem2.innerText = siteContent["nav"]["nav-item-2"];
  navitem2.style.color = 'green';

const navitem3 = navItems[2];
  navitem3.innerText = siteContent["nav"]["nav-item-3"];
  navitem3.style.color = 'green';

const navitem4 = navItems[3];
  navitem4.innerText = siteContent["nav"]["nav-item-4"];
  navitem4.style.color = 'green';

const navitem5 = navItems[4];
  navitem5.innerText = siteContent["nav"]["nav-item-5"];
  navitem5.style.color = 'green';

const navitem6 = navItems[5];
  navitem6.innerText = siteContent["nav"]["nav-item-6"];
  navitem6.style.color = 'green';

const addBlog = document.createElement('a');
const addBlogText = document.createTextNode('Blog');
addBlog.appendChild(addBlogText);
addBlog.style.padding = '0 0 0 40px';
addBlog.style.color = 'green';
navitem6.appendChild(addBlog);

const addHome = document.createElement('a');
const addHomeText = document.createTextNode('Home');
addHome.appendChild(addHomeText);
addHome.style.padding = '0 40px 0 0';
addHome.style.color = 'green';
navitem1.prepend(addHome);



// // Prepend 
//   const addedNav2 = document.createElement('a'); 
//   const addedNavText2 = document.createTextNode('Other new nav'); 
//   // Adding the text to the new a Element 
//   addedNav2.appendChild(addedNavText2); 
//   addedNav2.style.padding = "0 45px 0 0"; 
//   addedNav2.style.color = "blue"; 


//   // Adding to the nav bar 
//   navitem1.prepend(addedNav2);

//Select and add content to header
const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

const ctaText = document.querySelector('.cta-text h1');
ctaText.innerText = siteContent["cta"]["h1"];
ctaText.fontFamily = "Bangers";

const ctaButton = document.querySelector('.cta button');
ctaButton.innerText = siteContent['cta']['button'];

//Select and add content to main content 

const headings = document.querySelectorAll('.main-content h4'); 
headings[0].innerText = siteContent['main-content']['features-h4'];
headings[1].innerText = siteContent['main-content']['about-h4'];
headings[2].innerText = siteContent['main-content']['services-h4'];
headings[3].innerText = siteContent['main-content']['product-h4'];
headings[4].innerText = siteContent['main-content']['vision-h4'];

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const content = document.querySelectorAll('.main-content p');
content[0].innerText = siteContent['main-content']['features-content'];
content[1].innerText = siteContent['main-content']['about-content'];
content[2].innerText = siteContent['main-content']['services-content'];
content[3].innerText = siteContent['main-content']['product-content'];
content[4].innerText = siteContent['main-content']['vision-content'];

//Select and add content to contact and footer 
const contactHeader = document.querySelector('.contact h4');
contactHeader.innerText = siteContent['contact']['contact-h4']; 

const contactContent = document.querySelectorAll('.contact p');
contactContent[0].innerText = siteContent['contact']['address'];
contactContent[1].innerText = siteContent['contact']['phone'];
contactContent[2].innerText = siteContent['contact']['email'];

const footer = document.querySelector('footer p');
footer.innerText = siteContent['footer']['copyright'];


