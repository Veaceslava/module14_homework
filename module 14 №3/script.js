/* Модудь 14*/


/* Модудь 14 / Задание 3 */
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  const value1 = +document.getElementById('num1').value;
  

  let s = document.getElementById('j-result');
  s.textContent = '';
  if (!(value1 >= 1 && value1 <= 10)) {
    s.textContent = 'одно из чисел вне диапазона от 1 до 10';
    return;
  }

    
  fetch(`https://picsum.photos/v2/list?limit=10/${value1}`)
  .then((response) => {
    document.getElementById('result').src = response.url;
  });

});
    
  

  
  


