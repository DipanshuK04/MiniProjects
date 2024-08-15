const date = "latest"; // You can replace "latest" with a specific date if needed
const apiVersion = "1"; // Assuming version 1

const BaSEURL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/${apiVersion}/currencies`;

const dropdownS = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button")
let msg = document.querySelector(".msg");
let fromCou = document.querySelector(".from select");
let TOCou = document.querySelector(".to select");
for(let select of dropdownS){
    for(let Currcode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = Currcode;
        newOption.value = Currcode;    
        select.append(newOption);
        if(select.name === "from" && Currcode === "USD"){
            newOption.selected = "selected";
        }else if(select.name === "To" && Currcode === "INR"){
            newOption.selected = "selected";
        }        
    }

    select.addEventListener("change", (evt) =>{
        updateFlag(evt.target);
    })
}

const updateFlag = (element) =>{
    let currCode = element.value;
    let countrycode = countryList[currCode];
    let img = element.parentElement.querySelector("img");
    let newSrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
    img.src = newSrc;

}

btn.addEventListener("click", async (evt) =>{
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    if(amount.value < 1 || amount.value === "" ){
        amount.value = 1;
    }
    // console.log(TOCou.value.toLowerCase());
    // const URL = `${BaSEURL}/${fromCou.value.toLowerCase()}/${TOCou.value.toLowerCase()}.json`;
    const URL = `${BaSEURL}/${fromCou.value.toLowerCase()}/${TOCou.value.toLowerCase()}.json`;
    console.log('Fetching URL:', URL); // Debugging URL

    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[TOCou.value.toLowerCase()];
    let finalValue = rate * amount.value;
    msg.innerText = `${amount.value} ${fromCou.value}= ${finalValue} ${TOCou.value}`;

})