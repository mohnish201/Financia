



let circle_btn = document.querySelector('.circle-btn');
let AddTransactionDiv = document.getElementById('addTransaction');

circle_btn.addEventListener('click', function() {
    AddTransactionDiv.classList.toggle('show');
});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.querySelector("body").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.querySelector("body").style.marginLeft= "0";
  }

let amount = document.getElementById("amount");
let withdraw = document.getElementById("withdraw");
let date = document.getElementById("date");
let time = document.getElementById("time");
let category = document.getElementById("category");
let comment = document.getElementById("comment");
let saveBtn = document.getElementById("save_Transaction");


saveBtn.addEventListener("click", fetchdata)
async function fetchdata(){
    try {
        let res = await fetch("https://backend-server-shx1.onrender.com/add_trasaction")
        let data = await res.json();
        console.log(data);

    } catch (error) {
        console.log(error)
    }
}
//   <div id="first">
//   <label for="">Amount</label><br>
//   <input type="number" placeholder="Emter amount" id="amount"><br>
// </div>

// <div id="second">
//   <label >Withdraw from</label><br>
//   <select name="withdraw" id="withdraw"><br>
//       <option value="">select withdraw</option>
//       <option value="cash">Cash</option>
//       <option value="Debit">Debit</option>
//       <option value="Credit">Credit</option>
//   </select><br>
// </div>
// <div id="third">
//   <label for="">Date</label><br>
//   <input type="date" id="date">
// </div>
// <div id="fourth">
//   <label for="">Time</label><br>
//   <input type="time" id="time">
// </div>
// <div id="fifth">
//   <label for="">Categories</label><br>
//   <select name="category" id="category">
//       <option value="Grocery">Grocery</option>
//       <option value="Bills">Bills</option>
//       <option value="Pets">Pets</option>
//       <option value="Transport">Transport</option>
//       <option value="Shopping">Shopping</option>
//       <option value="Entertainment">Entertainment</option>
//   </select>

// <div id="six">
//   <label for="">Comment(optional)</label><br>
//   <textarea name="Comment" id="" cols="30" rows="4"></textarea>
// </div>

// <button id="save_Transaction">Save</button>
// </div>