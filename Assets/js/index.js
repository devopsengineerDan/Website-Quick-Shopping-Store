
const cartContainer = document.querySelector('.shopping-container');
const itemDisplay = document.querySelector('.list-container');
const cartButton = document.querySelector('.add-to-cart');
const displayImage = document.querySelector('.display-image');
const displayHeading = document.querySelector('.display-heading');
const displayParagraph = document.querySelector('.display-paragraph');
const displayPrice = document.querySelector('.display-price');
const addComments = document.querySelector('.comment');
const inputName = document.querySelector('.input-name');
const inputComment = document.querySelector('.input-comment');
const form = document.querySelector('form');
const left = document.querySelector('.left-button');
const right = document.querySelector('.right-button');
const galleryImage = document.querySelector('.gallery-image');
const title = document.querySelector('.gallery-text-title');
const subtitle = document.querySelector('.gallery-text-subtitle');
const like = document.querySelector('.like-button');
const likeCount = document.querySelector('.like-count');
const cartList = document.querySelector('.cart-list');

const fetchProducts = ()=>{
    fetch('https://fakestoreapi.com/products',{
        method:'GET',
        headers:{
            'Access-Control-Allow-Origin': 'https://fakestoreapi.com/products'
        }
    })
    .then((response)=>response.json())
    .then((data)=>showProducts(data))
    .catch((error)=>`error found:${error}`)
}
fetchProducts();

const showProducts = (info)=>{
    info.forEach((element)=>{
        const div = document.createElement('div');
        const img = document.createElement('img');
        img.setAttribute('src',`${element.image}`);
        img.setAttribute('class','product-image');
        displayImage.setAttribute('src',`${element.image}`);
        displayHeading.textContent = `${element.title}`;
        displayParagraph.textContent = `${element.description}`;
        displayPrice.textContent = `${element.price}`
        img.addEventListener('click',(event)=>{
            console.log('click');
            displayImage.setAttribute('src',`${element.image}`)
            displayHeading.textContent = `${element.title}`;
            displayParagraph.textContent = `${element.description}`;
            displayPrice.textContent = `$ ${element.price}`;
            cartHandler(element);
        })
        div.appendChild(img);
        itemDisplay.appendChild(div);
    })
}