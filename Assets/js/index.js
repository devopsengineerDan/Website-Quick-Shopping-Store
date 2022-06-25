
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

const commentBar = ()=>{
    form.addEventListener('submit',(event)=>{
        event.preventDefault();
        const List = document.querySelector('.list');
        const ListItem = document.createElement('li');
         ListItem.textContent = inputComment.value;
        List.appendChild(ListItem);
    })
}

commentBar();

const slideshowData = ()=>{
    fetch('http://localhost:3000/images')
    .then((response)=>response.json())
    .then((data)=>slideshow(data))
}

const slideshow = (info)=>{
    let i = 0;
        galleryImage.setAttribute('src',`${info[0].image}`);
        title.textContent = `${info[0].title}`
        subtitle.textContent = `${info[0].subtitle}`;
        left.addEventListener('click',(event)=>{
            console.log(i);
            if(i<1){
                i = 3;
            }
            i--;
            galleryImage.setAttribute('src',`${info[i].image}`);
            title.textContent = `${info[i].title}`
            subtitle.textContent = `${info[i].subtitle}`;
        });
        right.addEventListener('click',(event)=>{
            console.log(i);
            if(i>1){
                i = -1;
            }
            i++
            galleryImage.setAttribute('src',`${info[i].image}`);
            title.textContent = `${info[i].title}`
            subtitle.textContent = `${info[i].subtitle}`;
        })
}

slideshowData();

const likeHandler = ()=>{
    let i = 0;
    like.addEventListener('click',(event)=>{
        if(like.textContent === '♡'){
            likeCount.textContent = `${i++} likes`
            like.textContent = '♥';
        }
        else{
            like.textContent = '♡'
        }
    })
}

likeHandler();

const cartHandler = (element)=>{
    cartButton.addEventListener('click',(event)=>{
        console.log('click');
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `<image src="${element.image}" width="300"><h3>"${element.title}"</h3><h3>"${element.price}"</h3><button class="cart-element">remove</button>`;
        cartList.appendChild(cartItem);
    })
}
