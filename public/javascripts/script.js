document.getElementById('form').addEventListener('submit', (e) => {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const res = document.getElementById('res');

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById('error4').style.display = 'block';
  } else {
    document.getElementById('error4').style.display = 'none';

    let flag = false;
    for (let ele of document.getElementsByName('op')) {
      if (ele.checked == true) {
        flag = true;
      }
    }

    if (flag == false) {
      document.getElementById('error3').style.display = 'block';
    } else {
      document.getElementById('error3').style.display = 'none';
    }
  }
});

document.getElementById('num1').addEventListener('focusout', (e) => {
  if (e.target.value == '' || e.target.value.includes('e')) {
    document.getElementById('error1').style.display = 'block';
  } else {
    document.getElementById('error1').style.display = 'none';
  }
});

document.getElementById('num2').addEventListener('focusout', (e) => {
  if (e.target.value == '' || e.target.value.includes('e')) {
    document.getElementById('error2').style.display = 'block';
  } else {
    document.getElementById('error2').style.display = 'none';
  }
});
