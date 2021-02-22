const price = document.querySelector('#price');
const people = document.querySelector('#people');
const tip = document.querySelector('#tip');
const btn = document.querySelector('.count');
const errorMsg = document.querySelector('.error');
const costInfo = document.querySelector('.cost-info');

const isFilledOut = () => {
  if (price.value == "" || people.value == "" || tip.value == 0) {
    errorMsg.innerText = "Please provide missing information.";
  } else {
    errorMsg.innerText = "";
    costInfo.innerText = "";
    countCost();
  }
};

const countCost = () => {
  const newPrice = parseFloat(price.value);
  const newTip = parseFloat(tip.value);
  const peopleCount = parseFloat(people.value);
  
  const finalCost = (newPrice + (newPrice * newTip)) / peopleCount;
  costInfo.innerText = `The cost per person is ${finalCost.toFixed(2)}!`
};

btn.addEventListener('click', isFilledOut);