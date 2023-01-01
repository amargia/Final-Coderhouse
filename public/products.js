const getProducts = async () => {
    const url = '/api/productos'
    const data = await fetch(url)
    const products = await data.json()
    return products;
}

//Add product
const form = document.getElementById('addProduct');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    })

    addProduct(data);
    form.reset();
});

const addProduct = (product) => {
    const url = '/api/productos';
    const body = JSON.stringify(product);

    fetch(url, {
        method: 'POST',
        body,
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(async data => {
        const products = await getProducts();
        alert("Producto agregado");
        renderProducts(products);
        console.log(data);
    })
    .catch(err => console.log(err));
}

//Delete product
const deleteBtns = document.querySelectorAll(".deleteBtn");
deleteBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        const productId = e.target.id;
        deleteProduct(productId);
    })
})
const deleteProduct = (_id) => {
    const url = `/api/productos/${productId}`;
    fetch(url, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(async data => {
        const products = await getProducts();
        renderProducts(products);
        alert("Producto eliminado");
        console.log(data);
    })
    .catch(err => console.log(err));
}

//render products
const renderProducts = (products) => {
    const productsContainer = document.getElementById('productsContainer');
    productsContainer.innerHTML = '';

    products.forEach(product => {
        productsContainer.innerHTML += `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">
                        ${product.name}
                    </h5>
                    <p class="card-text">
                        ${product.description}
                    </p>
                    <p class="card-text">
                        ${product.price}
                    </p>
                    <a href="/api/productos/editProduct/${product._id}" class="btn btn-primary">Editar Producto</a>
                    <button id="<%= product._id %>" class="deleteBtn btn btn-danger">
                        Eliminar
                    </button>
                </div>
            </div>
        `;
    });
}

const url = '/api/productos';
fetch(url)
    .then(res => res.json())
    .then(data => {
        renderProducts(data);
    })
    .catch(err => console.log(err));


// Search tab
const search = document.getElementById('search');
search.addEventListener('keyup', (e) => {
    const url = '/api/productos';
    //fetch url
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const products = data.filter(product => {
                return product.name.toLowerCase().includes(e.target.value.toLowerCase());
            });
            renderProducts(products);
        })
        .catch(err => console.log(err));
});
