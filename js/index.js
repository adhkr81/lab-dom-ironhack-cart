// ITERATION 1

function updateSubtotal(product) {
  console.log(product);

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');

  itemValue = price.innerText;
  quantityValue = quantity.value;
  subtotalDisplay = itemValue * quantityValue;
  subtotal.innerText = subtotalDisplay;

  return subtotalDisplay;
}

function calculateAll() {
  const total = document.querySelector('#total-value span');
  const allProducts = document.getElementsByClassName('product');
  let subtotal = 0;
  console.log(allProducts);

  for (let i = 0; i < allProducts.length; i++) {
    subtotal += updateSubtotal(allProducts[i]);
  }
  console.log(subtotal);
  total.innerText = subtotal.toFixed(2);

  // end of test

  // ITERATION 2

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});

// PEGAR OS BOTÕES POR CLASSNAME
// FAZER UM FOR NESSES BOTÕES E ADICIONAR UM EVENTLISTENER PARA CADA UM
// E COMO CALLBACK, PASSA A FUNÇÃO REMOVEPRODUCT
