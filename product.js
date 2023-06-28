let products = []
function handleAddToCart (id) {
    const existedProduct = cart.cartProducts.find(pr => pr.id === id)
    const product = products.find(prod => prod.id === id)
    if(existedProduct){
        const existedProductIndex = cart.cartProducts.findIndex(item => item.id === id)
        cart.cartProducts[existedProductIndex].qty += 1;
        cart.total += product.price;
    }
    else{
        cart.cartProducts.push(product)    
        cart.total += product.price;
        product.qty = 1
    }
    loadCart()
}
fetch('./products.json')
    .then(res => res.json())
    .then(data => {
        products = data
        const container = document.getElementById('products-container')
        data.forEach(product => {
            const productDiv = document.createElement("div")
            productDiv.innerHTML = `
                <div class="p-4 w-full border rounded-xl hover:border-orange-500 hover:border-3 duration-300">
                    <a class="block relative h-[300px] rounded overflow-hidden">
                    <img alt="" class="object-cover object-center w-full block" src=${product.image}>
                    </a>
                    <div class="mt-4">
                        <h2 class="text-gray-900 title-font text-lg font-medium">${product.name}</h2>
                        <p class="mt-1">$${product.price}</p>
                        <button class="px-4 py-2 bg-orange-400 rounded-lg mt-3 text-white cursor-pointer" onclick="handleAddToCart('${product.id}')">Add to cart</button>
                    </div>
                </div>
    `
            container.appendChild(productDiv)
        })
    })