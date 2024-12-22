// const dropdowns = document.querySelectorAll(".dropdown-container select");
// const btn = document.querySelector("form button");
// const fromCur = document.querySelector(".from select");
// const toCur = document.querySelector(".to select");
// const apikey = "90a8db448d7ed250d8164d2b"; // Your API key
// const base_url = `https://v6.exchangerate-api.com/v6/latest/${fromCur}`

// // Populate the dropdowns with currency codes
// for (let sel of dropdowns) {
//     for (let curCode in countryList) {
//         let newOption = document.createElement("option");
//         newOption.innerText = curCode;
//         newOption.value = curCode;

//         // Set default selections
//         if (sel.name === "From" && curCode === "USD") {
//             newOption.selected = "selected";
//         } else if (sel.name === "To" && curCode === "INR") {
//             newOption.selected = "selected";
//         }
//         sel.append(newOption);
//     }

//     // Update flag when the selected currency changes
//     sel.addEventListener("change", (evt) => {
//         updateFlag(evt.target);
//     });
// }

// // Update the flag icon based on the selected currency
// const updateFlag = (element) => {
//     let currCode = element.value;
//     let countryCode = countryList[currCode];
//     let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
//     let img = element.parentElement.querySelector("img");
//     img.src = newSrc;
// };

// // Fetch exchange rates and calculate the converted amount
// btn.addEventListener("click",async (evt) =>{
//     evt.preventDefault();
//     let amount=document.querySelector(".amt input");
//     let amtVal=amount.value;
//     if(amtVal===""||amtVal<1){
//         amtVal=1;
//         amount.value="1";
//     }

// const url= `${base_url}/${fromCur.value.toUpperCase()}`;
// let response=await fetch(url);
// let data=await response.json();
// let rate=data(toCur.value.toLowerCase());
// console.log(rate);
// console.log(amtVal);
// }); 

// //since in api letters are in lower case so we need to chage these to lcase to
//     // console.log(fromCur.value,toCur.value);
   
// // async function convertCurrency(){
// // const response = await fetch(base_url)
// // const data=await response.json();
// // const rate=data.rates[toCur];
// // const convertedAmt=(amt*rate).toFixed(2)
// // }

const dropdowns = document.querySelectorAll(".dropdown-container select");
const btn = document.querySelector("form button");
const fromCur = document.querySelector(".from select");
const toCur = document.querySelector(".to select");
const apikey = "90a8db448d7ed250d8164d2b"; // Your API key
const base_url = `https://v6.exchangerate-api.com/v6/${apikey}/latest/${fromCur.value}`;
const msg = document.querySelector(".MSG");


// Populate dropdowns with currency codes
for (let select of dropdowns) {
  for (let currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;

    // Set default selections
    if (select.name === "From" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "To" && currCode === "INR") {
      newOption.selected = "selected";
    }

    select.append(newOption);
  }

  // Update flag when the selected currency changes
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

// Fetch exchange rates and update conversion result
const updateExchangeRate = async () => {
    let amount = document.querySelector(".amt input");
    let amtVal = amount.value;
  
    if (amtVal === "" || amtVal < 1) {
      amtVal = 1;
      amount.value = "1";
    }
  
    const URL = `https://v6.exchangerate-api.com/v6/${apikey}/latest/${fromCur.value}`;
    console.log("Constructed URL:", URL);
  
    try {
      let response = await fetch(URL);
      console.log("API Response:", response);
  
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
  
      let data = await response.json();
      console.log("API Data:", data);
  
      let rate = data.conversion_rates[toCur.value];
      let finalAmount = (amtVal * rate).toFixed(2);
      msg.innerText = `${amtVal} ${fromCur.value} = ${finalAmount} ${toCur.value}`;
    } catch (error) {
      console.error("Failed to fetch exchange rates:", error);
      msg.innerText = "Failed to fetch exchange rates. Please check your API key or internet connection.";
    }
  };
  
// Update flag icon based on the selected currency
const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

// Event listener for button
btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

// Update exchange rate on page load
window.addEventListener("load", () => {
  updateExchangeRate();
});
