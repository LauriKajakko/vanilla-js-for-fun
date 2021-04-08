const addElement = () => {
  const newDiv = document.createElement('div');
  const newContent = document.createTextNode('Hello document');
  newDiv.appendChild(newContent);
  const title = document.getElementById('')
  document.body.insertBefore(newDiv, title)
}

addElement();