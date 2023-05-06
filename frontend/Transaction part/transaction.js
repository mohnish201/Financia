



let circle_btn = document.querySelector('.circle-btn');
let AddTransactionDiv = document.getElementById('addTransaction');
let No_Transaction = document.getElementById("No_Transaction")
let mainContainer = document.getElementById("mainContainer");
let Transactions_container = document.getElementById("Transactions_container");

circle_btn.addEventListener('click', function() {
    AddTransactionDiv.style.display= "block"
    AddTransactionDiv.style.visibility = "visible"
    mainContainer.style.filter = "blur(5px)"
    // AddTransactionDiv.style.filter = "blur(5px)"

    // AddTransactionDiv.classList.toggle('show'); 
    /* Black fallback color */
   
});


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.querySelector("body").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.querySelector("body").style.marginLeft= "0";
    // AddTransactionDiv.style.display = "none"
  }

  function closeTransDiv(){
    AddTransactionDiv.style.visibility = "hidden";
    mainContainer.style.filter = "blur(0px)"


  }


let amount = document.getElementById("amount");
let withdraw = document.getElementById("withdraw");
let date = document.getElementById("date");
let time = document.getElementById("time");
let category = document.getElementById("category");
let comment = document.getElementById("comment");
let saveBtn = document.getElementById("save_Transaction");
let headerContainer = document.getAnimations("headerContainer");
let total = document.getElementById("total");
let total_balance = document.getElementById("total_balance");





fetchdata()
async function fetchdata(){
    try {
     
        let res = await fetch("https://backend-server-shx1.onrender.com/add_trasaction");
        let data = await res.json();
        console.log(data);
        displaydata(data)
    } catch (error) {
        console.log(error)
    }
}

saveBtn.addEventListener("click", function(){

    showdata();

    AddTransactionDiv.style.display = "none"
})
async function showdata(){
    try {
        let res = await fetch("https://backend-server-shx1.onrender.com/add_trasaction",
        {
            method: "POST",
            headers:{
                "Content-type": "application/json"
            } ,
            body: JSON.stringify({
                amount: +amount.value,
                withdraw_from: withdraw.value,
                date: date.value,
                time: time.value,
                category: category.value,
                comment: comment.value
            })

        }
        )
        let data = await res.json();
        console.log(data);
        fetchdata()

    } catch (error) {
        console.log(error)
    }
}

// async function showData(){
//     try {
//         let res = await fetch("https://backend-server-shx1.onrender.com/add_trasaction")
//     } catch (error) {
        
//     }
// }



function displaydata(data){

    Transactions_container.innerHTML = "";

    data.forEach((el)=>{

        let cards = document.createElement("div");
        cards.className = "card";

      

        let iconDiv = document.createElement("div");
        iconDiv.className = "iconDiv"
        let icon = document.createElement("i");
        icon.className = `fa-solid fa-${el.category} fa-xl`
        iconDiv.append(icon);

          const setBg = () => {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            iconDiv.style.backgroundColor = "#" + randomColor;
          }
          setBg();

        let categoryDiv = document.createElement("div");
        categoryDiv.className = "categoryDiv"; 
        let category = document.createElement("p");
        category.className = "category";
        category.textContent = el.category;

     

        let date = document.createElement("p");
        date.className = "date";
        date.textContent = el.date;

        let time = document.createElement("p");
        time.className = "time";
        time.textContent = el.time;

        let withdraw_from = document.createElement('p');
        withdraw_from.className = "withdraw_from";
        withdraw_from.textContent = el.withdraw_from;

        let amtDiv = document.createElement("div")
        amtDiv.id = "amount";
        let amount = document.createElement("p");
        amount.className = "amount";
        amount.textContent = "- "+"$"+el.amount;

        amtDiv.append(amount)

        let sum =0;
        for(let i=0; i<data.length; i++){
            sum+= data[i].amount;
        }
        total_balance.innerText = "$"+sum;
       
        cards.append(iconDiv, category, date, time, withdraw_from, amtDiv)
        Transactions_container.append(cards)

        // total_balance.innerText = totalFun(el)
      

    })
    
}








