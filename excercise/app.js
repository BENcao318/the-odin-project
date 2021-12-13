const container = document.querySelector('#container');

const button = document.querySelector('.btn').addEventListener('click', addContent);

function addContent(e) {
  const p = document.createElement("p");
  p.textContent = "Hey I’m red!";
  p.style.color = "red";
  container.appendChild(p);
  const h3 = document.createElement("h3");
  h3.textContent = "I’m a blue h3!";
  h3.style.color = "blue";
  container.appendChild(h3);
  const content = document.createElement('div');
  content.style.border = "2px solid black";
  content.style.backgroundColor = "pink";
  const h1 = document.createElement('h1');
  h1.textContent = " I'm in a div";
  const p2 = document.createElement('p');
  p2.textContent = "ME TOO!";
  container.appendChild(content);
  content.appendChild(h1);
  content.appendChild(p2);
  console.log(e.target);
  e.target.style.backgroundColor = "lightgreen";
  console.log(e.keycode);
}

window.addEventListener('keypress', (e) => console.log(`${e.keyCode}`))