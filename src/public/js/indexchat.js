// eslint-disable-next-line no-undef
const socketClient = io()
const chatBox = document.getElementById('chatBox')

chatBox.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    socketClient.emit('message', chatBox.value)
    chatBox.value = ''
  }
})

socketClient.on('history', data => {
  const history = document.getElementById('history')
  let messages = ''
  data.forEach(message => {
    messages += `${message.userId}:<br/>${message.message}<br/>`
  })
  history.innerHTML = messages
})
