const products = [
  { id: 'p001', name: 'Wireless Mouse' },
  { id: 'p002', name: 'Keyboard' },
  { id: 'p003', name: 'Laptop Stand' },
  { id: 'p004', name: 'Monitor' },
  { id: 'p005', name: 'Webcam' }
];

const productSelect = document.getElementById('product');
products.forEach(product => {
  const option = document.createElement('option');
  option.value = product.id;
  option.textContent = product.name;
  productSelect.appendChild(option);
});

// Dynamic footer year
document.getElementById('year').textContent = new Date().getFullYear();