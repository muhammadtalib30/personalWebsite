
document.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelectorAll('button');
  const plan = document.querySelectorAll(".plan");
  const plansInfo = document.querySelectorAll(".sideplans a");
  const goBackButton = document.querySelectorAll('.goback');
  const addonContainer = document.querySelectorAll('.addon-box');
  const monthlyPlans = document.querySelector('.monthly');
  const yearlyPlans = document.querySelector('.yearly');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const numberInput = document.getElementById('number');
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const numberError = document.getElementById('numberError');
  const checkBox = document.getElementById('switch');
  const card1 = document.getElementById('addon-box1');
  const card2 = document.getElementById('addon-box2');
  const card3 = document.getElementById('addon-box3');

  let info = [];
  let flag = [];
  let totalPrice = 0;
  let currentPage = 1;

  // ---------------page-1---------------

  pageNavigation(false);
  button[0].addEventListener('click', function (event) {
    event.preventDefault();
    let email = emailInput.value;
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (nameInput.value.trim() === '') {
      nameError.style.display = "inline";
      nameInput.style.borderColor = "red";
      flag[0] = false;
    }
    else {
      nameError.style.display = 'none';
      nameInput.style.borderColor = "hsl(231, 5%, 72%)";
      flag[0] = true;
    }
    if (emailInput.value.trim() === '' || !email.match(emailRegex)==true) {
      emailError.style.display = "inline";
      emailInput.style.borderColor = "red";
      flag[1] = false;
    }
    else {
      emailError.style.display = 'none';
      emailInput.style.borderColor = "hsl(231, 5%, 72%)";
      flag[1] = true;
    }
    if (numberInput.value.trim() === '') {
      numberError.style.display = "inline";
      numberInput.style.borderColor = "red";
      flag[2] = false;
    }
    else {
      numberError.style.display = 'none';
      numberInput.style.borderColor = "hsl(231, 5%, 72%)";
      flag[2] = true;
    }
    if (flag[0] && flag[1] && flag[2] ) {
      let newContact = [nameInput.value, emailInput.value, numberInput.value];
      document.querySelector("#page-2").style.display = "block";
      document.querySelector("#page-1").style.display = "none";
      pageNavigation(true);
    }
  });
  // ---------------page-2------------------
  button[1].addEventListener('click', function (event) {
    pageNavigation(true);
    document.querySelector("#page-3").style.display = "block";
    document.querySelector("#page-2").style.display = "none";
  });
  updatePlanVisibility();
  checkBox.addEventListener("change", updatePlanVisibility);
  plansInfo.forEach((plansInfo, index) => {
    plansInfo.addEventListener('click', function (event) {
      event.preventDefault();
      if (checkBox.checked == false) {
        if (index == 0) {
          info[0] = "Arcade (Monthly)";
          info[1] = "$9/mo";
          plan[index].style.backgroundColor = " hsl(217, 100%, 97%)";
          plan[index + 1].style.backgroundColor = "white";
        }
        else if (index == 1) {
          info[0] = "Advanced (Monthly)";
          info[1] = "$12/mo";

          plan[index].style.backgroundColor = " hsl(217, 100%, 97%)";
          plan[index - 1].style.backgroundColor = "white";
          plan[index + 1].style.backgroundColor = "white";
        }
        else if (index == 2) {
          info[0] = "Pro (Monthly)";
          info[1] = "$15/mo";
          plan[index].style.backgroundColor = " hsl(217, 100%, 97%)";
          plan[index - 1].style.backgroundColor = "white";
          plan[index - 2].style.backgroundColor = "white";
        }
      }
      else {
        if (index == 3) {
          info[0] = "Arcade (yearly)";
          info[1] = "$90/yr";
          plan[index].style.backgroundColor = " hsl(217, 100%, 97%)";
          plan[index - 1].style.backgroundColor = "white";
          plan[index + 1].style.backgroundColor = "white";
        }
        else if (index == 4) {
          info[0] = "Advanced (yearly)";
          info[1] = "$120/yr";
          plan[index].style.backgroundColor = " hsl(217, 100%, 97%)";
          plan[index - 1].style.backgroundColor = "white";
          plan[index + 1].style.backgroundColor = "white";

        }
        else if (index == 5) {
          info[0] = "Pro (yearly)";
          info[1] = "$150/yr";
          plan[index].style.backgroundColor = " hsl(217, 100%, 97%)";
          plan[index - 1].style.backgroundColor = "white";
            plan[index - 2].style.backgroundColor = "white";

        }
      }
    });
  });

  // ------------------------page-3---------------------
  button[2].addEventListener('click', function (event) {
    pageNavigation(true);
    document.querySelector("#page-4").style.display = "block";
    document.querySelector("#page-3").style.display = "none";
    last();
  });
  changecardcolor(0, card1.checked);
  changecardcolor(1, card2.checked);
  changecardcolor(2, card3.checked);
  card1.addEventListener('change', function () {
    changecardcolor(0, this.checked);
  });
  card2.addEventListener('change', function () {
    changecardcolor(1, this.checked);
  });
  card3.addEventListener('change', function () {
    changecardcolor(2, this.checked);
  });

  // ---------------------page-4----------------------
  function last() {

    let plans = document.querySelector(".subscription h5");
    let planPrice = document.querySelector(".subscription p");
    plans.innerHTML = info[0];
    planPrice.innerHTML = info[1];
    extractNumericValue(info[1]);
    document.querySelectorAll(".addon-box .price");
    if (card1.checked) {

      document.getElementById("selected-addOns-name1").innerHTML = "Online service";
      let price = document.querySelectorAll(".addon-box .price")[0].textContent;
      document.getElementById("selected-addOns-price1").innerHTML = price;
      extractNumericValue(price);
    }
    if (card2.checked) {

      document.getElementById("selected-addOns-name2").innerHTML = "Larger storage";
      let price = document.querySelectorAll(".addon-box .price")[1].textContent;
      document.getElementById("selected-addOns-price2").innerHTML = price;
      extractNumericValue(price);
    }
    if (card3.checked) {

      document.getElementById("selected-addOns-name3").innerHTML = "Customizable Profile";
      let price = document.querySelectorAll(".addon-box .price")[2].textContent;
      document.getElementById("selected-addOns-price3").innerHTML = price;
      extractNumericValue(price);
    }
    
    if (checkBox.checked) {
      document.getElementById("total-price").innerHTML = `$${totalPrice}/yr`;
      document.getElementById("Total").innerHTML = "Total (per year)";
    }
    else {
      document.getElementById("total-price").innerHTML = `$${totalPrice}/mo`;
      document.getElementById("Total").innerHTML = "Total (per month)";

    }
  }

  // ---------------------page-5-----------------
  document.getElementById('page4-btn').addEventListener('click', function () {
    document.getElementById('page-4').style.display = "none";
    document.getElementById('page-5').style.display = "block";
  });
  // ----------------------Go-back button-------------------------
  goBackButton.forEach((button, index) => {
    button.addEventListener('click', function (event) {
      event.preventDefault();
      if (index == 2) {
        totalPrice = 0;
      }
      pageNavigation(false);
    });
  });

  // ----------------functions-------------------

  function pageNavigation(flag) {
    let totalPages = 4;
    if (flag) {
      if (currentPage < totalPages) {
        currentPage++;
      }
    } else {
      if (currentPage > 1) {
        currentPage--;
      }
    }
    document.querySelectorAll('section').forEach((page) => {
      page.style.display = 'none';
    });
    const currentPageId = `page-${currentPage}`;
    document.querySelector(`#${currentPageId}`).style.display = 'block';
    document.querySelectorAll('.counting').forEach((number, index) => {
      if (index + 1 === currentPage) {
        number.style.backgroundColor = 'hsl(206, 94%, 87%)';
        number.style.color = 'black';
      } else {
        number.style.backgroundColor = 'hsl(243, 100%, 62%)';
        number.style.color = 'white';
      }
    });
  }

  function updatePlanVisibility() {
    if (checkBox.checked) {
      yearlyPlans.style.display = "block";
      monthlyPlans.style.display = "none";
      info[0] = "Arcade (Yearly)";
      info[1] = "$90/yr";
      changeprice(true);
    }
    else {
      yearlyPlans.style.display = "none";
      monthlyPlans.style.display = "block";
      info[0] = "Arcade (Monthly)";
      info[1] = "$9/mo";
      changeprice(false);
    }
  }


  function changecardcolor(cardNo, checked) {
    if (checked) {
      addonContainer[cardNo].style.backgroundColor = "hsl(217, 100%, 97%)";
      addonContainer[cardNo].style.borderColor = "purple";
    }
    else {
      addonContainer[cardNo].style.backgroundColor = "#fff";
      addonContainer[cardNo].style.borderColor = "hsl(231, 10%, 58%)";
    }
  }

  function changeprice(flag) {
    let price = document.querySelectorAll(".addon-box .price");
    if (flag) {
      price[0].innerHTML = "+$10/yr";
      price[1].innerHTML = "+$20/yr";
      price[2].innerHTML = "+$20/yr";
    }
    else {
      price[0].innerHTML = "+$1/mo";
      price[1].innerHTML = "+$2/mo";
      price[2].innerHTML = "+$2/mo";
    }
  }

  function extractNumericValue(inputString) {
    const regex = /(\d+(\.\d+)?)/;
    const matches = inputString.match(regex);
    if (matches) {
      let x = parseFloat(matches[0]);
      if (x !== null) {
        console.log("Numeric Value:", x);
        totalPrice += x;
        console.log("Total Price:", totalPrice);
      } else {
        console.log("Invalid numeric value in info[1]");
      }
    }
  }
});








//   labels.forEach(function(label, i) {
//     label.innerHTML = label.textContent;
//     inputs[i].style.borderColor = '';
//   });

// var pages = document.querySelectorAll('section');
// pages.forEach(function(page) {
//     var pageNumber = page.id;
//     let number = document.querySelectorAll('.counting');
//     addEventListener("DOMContentLoaded",function(event){
//     if(pageNumber == "page-1"){
//       number[0].style.backgroundColor="hsl(206, 94%, 87%)";
//       number[0].style.color="black";
//     }
//     else if(pageNumber == "page-2"){
//       number[1].style.backgroundColor="hsl(206, 94%, 87%)";
//       number[1].style.color="black";
//     }
//     else if(pageNumber == "page-3"){
//       number[2].style.backgroundColor="hsl(206, 94%, 87%)";
//       number[2].style.color="black";
//     }
//    else  if(pageNumber == "page-4"){
//       number[3].style.backgroundColor="hsl(206, 94%, 87%)";
//       number[3].style.color="black";}})

// });







/*let currentPage = 1;
function pageNavigation(flag) {
  console.log(currentPage);
  let totalPages = 4;
  if (flag) {
    let pageno = "#page-" + currentPage;
    document.querySelector(`${pageno} .btn`).addEventListener("click", () => {
      if (currentPage < totalPages) {
        let number = document.querySelectorAll('.counting');
        number[currentPage - 1].style.backgroundColor = "hsl(243, 100%, 62%)";
        number[currentPage - 1].style.color = "white";
        currentPage++;
  console.log(currentPage);

        number = document.querySelectorAll('.counting');
        number[currentPage - 1].style.backgroundColor = "hsl(206, 94%, 87%)";
        number[currentPage - 1].style.color = "black";
      }
    });
    // document.querySelector(`${pageno} .page-changer a`).addEventListener("click", () => {
    //   if (currentPage > 1) {
    //     let number = document.querySelectorAll('.counting');
    //     number[currentPage - 1].style.backgroundColor = "hsl(243, 100%, 62%)";
    //     number[currentPage - 1].style.color = "white";
    //     currentPage--;
    //     number[currentPage - 1].style.backgroundColor = "hsl(206, 94%, 87%)";
    //     number[currentPage - 1].style.color = "black";
    //   }
    // });
  }
}*/

