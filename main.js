
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailIcon = document.querySelector('.product-detail-close')
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
const productDetail2 = document.querySelector('.product-detail-2');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
carritoIcon.addEventListener('click', toggleAside);
productDetailIcon.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed) {
        aside.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed) {
        aside.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleAside() {
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive')
    }

    const ismobileMenuclosed = mobileMenu.classList.contains('inactive');
    if (!ismobileMenuclosed) {
        mobileMenu.classList.add('inactive')
    }
    aside.classList.toggle('inactive');
}

function openProductDetail2 () {
    productDetail2.classList.remove('inactive');

}

function  closeProductDetailAside () {
    productDetail2.classList.add('inactive');
}

const productList = [];
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

function renderProducts (arr) {
    for (product of arr) {

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetail2);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
    
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    
    
    }
}

renderProducts(productList);