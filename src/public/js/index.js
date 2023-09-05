// eslint-disable-next-line no-undef
const socketClient = io()

/* const table = document.getElementById('table-realTime') */
const btn = document.getElementById('createBtn')

btn.addEventListener('click', () => {
  const body = {
    title: document.getElementById('title').value,
    description: document.getElementById('description').value,
    code: document.getElementById('code').value,
    price: parseFloat(document.getElementById('price').value),
    status: document.getElementById('status').value.toLowerCase() === 'true',
    stock: parseInt(document.getElementById('stock').value),
    category: document.getElementById('category').value
  }

  fetch('/api/products', {
    method: 'post',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(result => result.json())
    .then(result => console.log(result))
})

socketClient.emit('message', 'hola!')
