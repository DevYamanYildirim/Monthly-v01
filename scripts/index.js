// let data = "yaman";
// console.log(`dsadasdasdad ${data}`);
function convertAmount(amountInKurus) {
  amountInTL = amountInKurus / 100;

  return amountInTL.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
function addItems() {
  items.forEach((item) => {
    let definiton = item.definiton;
    let dueDate =
      item.dueDay.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
      }) +
      "-" +
      item.dueMonth.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
      }) +
      "-" +
      item.dueYear;
    let amount = convertAmount(item.amount);
    let currency = item.currency;
    let isActive = item.isActive;

    let arrowSource;
    let marker;
    if (item.amount < 0) {
      arrowSource = "./icons/arrow-down-circle.svg";
      amountFontColor = "expense-red";
    } else {
      arrowSource = "./icons/arrow-up-circle.svg";
      amountFontColor = "";
    }

    if (isActive) {
      checkedAttribute = "checked";
    } else {
      checkedAttribute = "";
    }

    let card = document.querySelector(".js-itemCard");
    let newItem = `<div class="flex-row border-top pt-2 mt-2">
      <div class="w-100">
        <div class="flex-row w-100 justify-content-between mb-1">
          <div class="font-text">${definiton}</div>
          <div id="switch">
            <input type="checkbox" name="one" class="js-checkbox ${checkedAttribute}"/>
          </div>
        </div>
        <div class="flex-row w-100 justify-content-between  ${amountFontColor}">
          <div class="font-light-sub-text">
            <img class="pr-2" src="./icons/calendar-event.svg" />${dueDate}
          </div>
          <div>${amount} ${currency}</div>
        </div>
      </div>
    </div>`;
    card.innerHTML += newItem;
  });
}

let slider = document.querySelector(".js-checkbox");
let card = document.querySelector(".font-text");

slider.addEventListener("click", (event) => {
  console.log(event.target.checked);
});
console.log(slider);
console.log(card);
addItems();

// let oldItem = `<div class="flex-row border-top pt-2 mt-2">
// <div class="flex ${marker} rounded mr-2"></div>
// <div class="w-100">
// <div class="flex-row w-100 justify-content-between mb-1">
//     <div class="font-text">${definiton}</div>
//     <img src=${arrowSource}>
// </div>
// <div class="flex-row w-100 justify-content-between ${amountFontColor}">
//     <div class="font-light-sub-text"><img class="pr-2" src="./icons/calendar-event.svg"/>${dueDate}</div>
//     <div>${amount} ${currency}</div>
// </div>
// </div>
// </div>`;
