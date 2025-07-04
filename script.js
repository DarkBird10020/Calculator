 function oneBtn() { document.getElementById("inputField").value += "1"; }
  function twoBtn() { document.getElementById("inputField").value += "2"; }
  function threeBtn() { document.getElementById("inputField").value += "3"; }
  function fourBtn() { document.getElementById("inputField").value += "4"; }
  function fiveBtn() { document.getElementById("inputField").value += "5"; }
  function sixBtn() { document.getElementById("inputField").value += "6"; }
  function sevenBtn() { document.getElementById("inputField").value += "7"; }
  function eightBtn() { document.getElementById("inputField").value += "8"; }                           
  function nineBtn() { document.getElementById("inputField").value += "9"; }
  function zeroBtn() { document.getElementById("inputField").value += "0"; }
  function addBtn() { document.getElementById("inputField").value += "+"; }
  function subtractBtn() { document.getElementById("inputField").value += "-"; }
  function multiplyBtn() { document.getElementById("inputField").value += "*"; }
  function divideBtn() { document.getElementById("inputField").value += "/"; }
  function calculateBtn() {     
    const input = document.getElementById("inputField").value;
    document.getElementById("inputField").value = eval(input);   }
  function clearBtn() { document.getElementById("inputField").value = ""; }