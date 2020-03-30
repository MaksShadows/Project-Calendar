export let interval;

export function startLine(){
  renderRedLine();
  interval = setInterval( renderRedLine, 50000);
}

clearInterval(interval)

const redLine = document.querySelector(".redLine");
const redlineElem = document.createElement('div');
redlineElem.classList.add('redLine');
redlineElem.append(redLine);

 export function renderRedLine() {
  
  const hours = new Date().getHours();
  const min = new Date().getMinutes();

  redlineElem.style.top = `${60 * hours + min}px`;
};



