const form = document.getElementById("editProduct");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    editProduct(data);
});

const editProduct = (data) => {
    const url = `/api/productos/editProduct`;
    const method = "PUT";
    const headers = {
      "Content-Type": "application/json"
    };  
    const body = JSON.stringify(data);
  
    fetch(url, {method, headers, body})
      .then(res => res.json())
      .then(res => {    
          alert("Producto editado correctamente");  
          //redireccionar
          window.location.href = "/api/productos";      
      })
      .catch(err => console.log(err));
}