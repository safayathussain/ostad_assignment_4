let cart = {
    cartProducts: [],
    total: 0
}
const cartProductsContainer = document.getElementById('cart-products-container')
const totalField = document.getElementById('total-field')
const loadCart = () => {
    cartProductsContainer.innerHTML = ''
    cart.cartProducts.map(product => {
        const productDiv = document.createElement("div")
        productDiv.innerHTML = `
        <div class="flex items-center gap-2">
            <button class="text-xl w-5 h-5 flex items-center justify-center border rounded-full text-white text-center" onclick="removeFromCart('${product.id}')">-</button>
            <div class="flex justify-between text-white border border-white p-2 rounded-xl gap-1 mt-3">
                <p class="text-xl">${product.name}</p>
                <div class="">
                    <p>Quantity: ${product.qty}</p>
                    <p>Price: $${product.price}</p>
                </div>
            </div>
        </div>
        `
        totalField.innerText = `Total: $${cart.total.toFixed(1)}`
        cartProductsContainer.appendChild(productDiv)
    })

}
const handleClearCart = () => {
    cart.cartProducts = []
    cart.total = 0
    cartProductsContainer.innerHTML = ''
    totalField.innerText = 'Total: 0'
}
const removeFromCart = (id) => {
    const existedProduct = cart.cartProducts.find(pr => pr.id === id)
    const newArr = cart.cartProducts.filter(item => item.id !== id)
    cart.cartProducts = newArr
    cart.total = cart.total - existedProduct.price * existedProduct.qty;
    if(cart.cartProducts.length === 0 ){
        totalField.innerText = 'Total: 0'
    }
    loadCart()
    console.log(cart)
}