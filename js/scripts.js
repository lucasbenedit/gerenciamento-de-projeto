// scripts.js
document.getElementById('product-form').addEventListener('submit', addProduct);

function addProduct(event) {
    event.preventDefault();

    const productName = document.getElementById('product-name').value;
    const productPrice = document.getElementById('product-price').value;

    if (productName === '' || productPrice === '') {
        alert('Por favor, preencha todos os campos');
        return;
    }

    const productList = document.getElementById('product-list');

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${productName} - R$${productPrice}`));

    const deleteButton = document.createElement('button');
    deleteButton.appendChild(document.createTextNode('Remover'));
    deleteButton.addEventListener('click', () => {
        productList.removeChild(li);
    });

    li.appendChild(deleteButton);
    productList.appendChild(li);

    document.getElementById('product-form').reset();
}
