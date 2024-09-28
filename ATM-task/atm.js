let balance = 10000;

function checkpwd() {
    const pin = document.getElementById("pin").value;

    if (pin === "1234") {
        alert("Success");
        window.location.href = "menu.html";
    } else {
        alert("Failed");
    }
}

if (localStorage.getItem('balance') === null) {
    localStorage.setItem('balance', 10000);
  }
  

  function getBalance() {
    return parseInt(localStorage.getItem('balance')); 
  }
  
  
  function updateBalance(newBalance) {
    localStorage.setItem('balance', newBalance);
  }
  

  function withdraw(amount) {
    let balance = getBalance();
    if (amount > balance) {
      alert("Insufficient balance.");
    } else {
      balance -= amount;
      updateBalance(balance);
      alert("You have successfully withdrawn:" + amount + "  New balance:" + balance );
    }
  }
  

  function deposit(amount) {
    let balance = getBalance();
    balance += amount;
    updateBalance(balance);
    alert("You have successfully deposited ₹" + amount + "New balance: ₹"+ balance);
  }
  
  
  function transfer(amount) {
    let balance = getBalance();
    if (amount > balance) {
      alert("Insufficient balance.");
    } else {
      balance -= amount;
      updateBalance(balance);
      alert("You have successfully transferred: ₹"+ amount + "New balance: ₹" + balance);
    }
  }
  
  
  function checkBalance() {
    let balance = getBalance();
    alert('Your current balance is ₹'+ balance);
  }