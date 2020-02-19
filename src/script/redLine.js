const redLine = document.querySelector(".redLine");

function  renderRedLine() {
  const redlineElem = document.createElement('div');
   redlineElem.classList.add('redLine');
   redLine.append(redLine);

   const date = new Date();
   const hours = date.getHours();
  setInterval(() => {
    redlineElem( date);
  }, 5000);
 
};


export { renderRedLine };