/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/

// const buttons = document.querySelectorAll('.button');
// buttons.forEach((button) => {
//   button.addEventListener('click', (event) => {
   
//     console.log(event.target.innerText);
   
//   });
// });

const calculator = document.querySelector('#calculator');
const display=document.querySelector('.display');
let num1='';
let num2='';
let operation=null;

calculator.addEventListener('click', (event) => {
  
//   console.log(event.target.innerText);
const target=event.target;
const value=target.innerText;
  if (event.target.classList.contains('number')) {
      num1+=value;
     display.textContent=num1;

  }

  // Example
  else if (event.target.innerText === '+') {
    num2=num1;
    operation='+';
    num1='';

  }
  else if (event.target.innerText === '-') {
    num2=num1;
    operation='-';
    num1='';

  }
  else if (event.target.innerText === '*') {
    num2=num1;
    operation='*';
    num1='';

  }
  else if (event.target.innerText === '/') {
    num2=num1;
    operation='/';
    num1='';

  }
  else if (value==='='){
    if(operation==='+'){
        const result =parseInt(num2)+parseInt(num1);
        display.textContent=result;

        num1='';
        num2='';
        operation=null;
    }
    else if(operation==='-'){
        const result =parseInt(num2)-parseInt(num1);
        display.textContent=result;

        num1='';
        num2='';
        operation=null;
    }
    else if(operation==='*'){
        const result =parseInt(num2)*parseInt(num1);
        display.textContent=result;

        num1='';
        num2='';
        operation=null;
    }
    else if(operation==='/'){
        const result =parseInt(num2)/parseInt(num1);
        display.textContent=result;

        num1='';
        num2='';
        operation=null;
    }
  }
  else if (value === 'C') {
    num1 = '';
    num2 = '';
    operator = null;
    display.textContent = 0;
  }
});

