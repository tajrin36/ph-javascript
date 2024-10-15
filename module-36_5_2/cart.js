const addToCart = () => {
    const productName = document.getElementById('product-name');
    const productQuantity = document.getElementById('product-quantity');

    const name = productName.value;
    const quantity = productQuantity.value;
    productName.value = '';
    productQuantity.value = '';

    console.log(name,quantity);
    displayProduct(name,quantity);
    saveProductToLocaleStorage(name,quantity);
}

const displayProduct = (name,quantity) => {
    const ul = document.getElementById('product-container');
    const li = document.createElement("li");
    li.innerText = `${name}: ${quantity}`;
    ul.appendChild(li);
}

const getStoredShoppingCart = () => {
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }

    return cart;
}
const saveProductToLocaleStorage = (name,quantity) => {
    const cart = getStoredShoppingCart();
    cart[name] = quantity;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified);
}

const displayProductFromLocalStorage = () => {
    const savedCart = getStoredShoppingCart();
    console.log(savedCart);
    for(product in savedCart){
        const quantity = savedCart[product];
        console.log(product,quantity);
        displayProduct(product,quantity);
    }
}
displayProductFromLocalStorage();
