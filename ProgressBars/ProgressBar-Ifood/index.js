const stepButton = document.querySelector('.step')
let i = 0;

stepButton.addEventListener("click", (e) => {
  e.preventDefault()
  const main = document.querySelector('main')  
  const progressbar = document.querySelector('.progressbar')   
  const bar = createElementCompleteBar();
  progressbar.appendChild(bar)
  i++
  if(i === 4) concluir(main)
})

function concluir(main){
  stepButton.innerHTML = 'Recomeçar'
  main.innerHTML += '<h1>Completo</h1>'
  return
}

createElementCompleteBar = () => {
  const bar = document.createElement('div');
  bar.classList.add('complete-progress');
  return bar;
}
