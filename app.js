




// const buttons = document.querySelectorAll('.button');
// buttons.forEach((button) => {
//   button.addEventListener('click', (event) => {
   
//     console.log(event.target.innerText);
   
//   });
// });
/*------------------------ Cached Element References ------------------------*/

const calculator = document.querySelector('#calculator');
const display=document.querySelector('.display');
/*-------------------------------- Variables --------------------------------*/

let num1='';
let num2='';
let operation=null;
/*----------------------------- Event Listeners -----------------------------*/

calculator.addEventListener('click', (event) => {
/*-------------------------------- Constants --------------------------------*/

//   console.log(event.target.innerText);
const target=event.target;
const value=target.innerText;
/*-------------------------------- Functions --------------------------------*/

  if (target.classList.contains('number')) {
      num1+=value;
     display.textContent=num1;
  }

  else if (value === '+') {
    num2=num1;
    operation='+';
    num1='';

  }
  else if (value === '-') {
    num2=num1;
    operation='-';
    num1='';

  }
  else if (value === '*') {
    num2=num1;
    operation='*';
    num1='';

  }
  else if (value === '/') {
    num2=num1;
    operation='/';
    num1='';

  }
  else if (value==='='){
    let result;
    if(operation==='+'){
         result =num2+num1;
    }

    else if(operation==='-'){
         result =num2-num1;
    }

    else if(operation==='*'){
         result =num2*num1;
    }

    else if(operation==='/'){
         result =(num2)/(num1);
    }

      display.textContent=result;
        num1='';
        num2='';
        operation=null;
  }
  else if (value === 'C') {
    num1 = '';
    num2 = '';
    operator = null;
    display.textContent = 0;
  }
});

