const vartical = document.querySelector('.vartical');
const horizontal = document.querySelector('.horizontal');
const target = document.querySelector('.target');
const loc = document.querySelector('.loc');

document.addEventListener('mousemove', event => {
  console.log(event.currentTarget); //해당 이벤트의 노드객체를 알 수 있다
  const x = event.clientX;
  const y = event.clientY;
  console.log(`x : ${x} y : y${y}`)

  vartical.style.left = `${x}px`; //10px
  horizontal.style.top = `${y}px`;

  target.style.left = `${x}px`;
  target.style.top = `${y}px`;
  loc.style.left = `${x}px`;
  loc.style.top = `${y}px`;

  loc.textContent = `x : ${x} y : y ${y}`

});