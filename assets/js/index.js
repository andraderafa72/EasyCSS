const stepButton = document.querySelector('.step')
let i = 0;
let concluido = false

stepButton.addEventListener("click", (e) => {
  if(concluido) return
  e.preventDefault()
  const main = document.querySelector('main')  
  const progressbar = document.querySelector('.progressbar')   
  const bar = createElementCompleteBar();
  progressbar.appendChild(bar)
  i++
  if(i === 4) {stepButton.innerHTML = 'Recomeçar'; concluido = true; return}
})
createElementCompleteBar = () => {
  const bar = document.createElement('div');
  bar.classList.add('complete-progress');
  return bar;
}
