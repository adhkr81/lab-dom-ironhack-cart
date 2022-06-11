// ITERATION 1

function updateSubtotal(product) {
  // console.log(product);

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
  // ITERATION 2   // ITERATION 3
  const total = document.querySelector('#total-value span'); //pegando o span do total
  const allProducts = document.getElementsByClassName('product'); //pegando todos as linhas de produto, parece array

  let subtotal = 0;

  for (let i = 0; i < allProducts.length; i++) {
    subtotal += updateSubtotal(allProducts[i]);
  }
  // console.log(subtotal);
  total.innerText = subtotal.toFixed(2);

  const allRemoveBtns = document.getElementsByClassName('btn-remove');
  // console.log(document.getElementsByClassName('btn-remove'));
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target); // mostra aonde o evento esta
  target.parentElement.parentElement.remove(); //subindo 2 andares do node e apagando a TR
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const allRemoveBtns = document.getElementsByClassName('btn-remove'); //pegando todos os botoes com classe btn-remove

  for (let i = 0; i < allRemoveBtns.length; i++) {
    allRemoveBtns[i].addEventListener('click', (e) => removeProduct(e));
  }

  //... your code goes here
});

// PEGAR OS BOTÕES POR CLASSNAME
// FAZER UM FOR NESSES BOTÕES E ADICIONAR UM EVENTLISTENER PARA CADA UM
// E COMO CALLBACK, PASSA A FUNÇÃO REMOVEPRODUCT
