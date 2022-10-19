
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
carritoIcon.addEventListener('click', toggleAside);

function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed){
        aside.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed){
        aside.classList.add('inactive') 
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleAside () {
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive')
    }

    const ismobileMenuclosed = mobileMenu.classList.contains('inactive');
    if (!ismobileMenuclosed){
        mobileMenu.classList.add('inactive')
    }
    aside.classList.toggle('inactive');
}

const  productList =[];
productList.push({
    name: 'bike',
    price: 120,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoBHcpmcIB_0vNLP5XkiKeM2vJOCQb_gOSjQ&usqp=CAU',
});

productList.push({
    name: 'carro',
    price: 9920,
    image: 'http://www.eltiempo.com/files/article_multimedia/uploads/2017/03/30/58dd0901aab26.jpeg',
});

productList.push({
    name: 'moto',
    price: 1290,
    image: 'https://auteco.vteximg.com.br/arquivos/ids/218549-1000-1000/benelli-251s-verde-2022-foto1.png?v=637922146008800000',
});

productList.push({
    name: 'desktop',
    price: 200,
    image: 'https://m.media-amazon.com/images/I/612CyMLlFlL._SL1280_.jpg',
});

productList.push({
    name: 'army',
    price: 430,
    image: 'https://c8.alamy.com/compes/ra4b43/1979-un-obus-m101-de-105-mm-ra4b43.jpg',
});

productList.push({
    name: 'pelota',
    price: 6541,
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Basketball.jpeg',
});

for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const img = document.createElement('img');
    img.
}