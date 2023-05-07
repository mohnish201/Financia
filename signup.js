// let emailid = document.getElementById("email");
    // let phoneNumber = document.getElementById("phoneNumber");
    // let password = document.getElementById("password");
    // let confirmPassword = document.getElementById("confirmpassword");

    // let myform = document.querySelector("form");
    // let global = [];
    // let btn1=document.getElementById("btn1");
    // let userData=JSON.parse(localStorage.getItem("user-list"))||[];
    // console.log(userData);
    // btn1.addEventListener("click", function (e) {
    //   e.preventDefault();

    //   let obj = {
    //     email: emailid.value,
    //     phno: phoneNumber.value,
    //     password: password.value,
    //     cp: confirmPassword.value,
    //   };

    //   global.push(obj);
    //   // console.log(global);
    //   localStorage.setItem("user-list", JSON.stringify(global));

    //   display(global);

    // });


    let emailid = document.getElementById("email");
    let phoneNumber = document.getElementById("phoneNumber");
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirmpassword");

    let myform = document.querySelector("form");
    let userData = JSON.parse(localStorage.getItem("user-list")) || [];
    let btn1 = document.getElementById("btn1");
    btn1.addEventListener("click", function (e) {
      e.preventDefault();

      if (password.value !== confirmPassword.value) {
        alert("Passwords do not match!");
        password.value = "";
        confirmPassword.value = "";
        return;
      }

      let obj = {
        email: emailid.value,
        phno: phoneNumber.value,
        password: password.value,
        cp: confirmPassword.value,
      };

      userData.push(obj);
      localStorage.setItem("user-list", JSON.stringify(userData));

      alert("Account Creation successful!");

      // Optional: clear the form inputs after successful sign-up
      emailid.value = "";
      phoneNumber.value = "";
      password.value = "";
      confirmPassword.value = "";

      window.location.href = "home.html";
    });




     // let emailid = document.getElementById("email");
    // let phoneNumber = document.getElementById("phoneNumber");
    // let password = document.getElementById("password");
    // let confirmPassword = document.getElementById("confirmpassword");

    // let myform = document.querySelector("form");
    // let userData = JSON.parse(localStorage.getItem("user-list")) || [];
    // let btn1 = document.getElementById("btn1");
    // btn1.addEventListener("click", function (e) {
    //   e.preventDefault();

    //   if (password.value !== confirmPassword.value) {
    //     alert("Passwords do not match!");
    //     password.value = "";
    //     confirmPassword.value = "";
    //     return;
    //   }

    //   let obj = {
    //     email: emailid.value,
    //     phno: phoneNumber.value,
    //     password: password.value,
    //     cp: confirmPassword.value,
    //   };

    //   userData.push(obj);
    //   localStorage.setItem("user-list", JSON.stringify(userData));

    //   alert("Account Creation successful!");

    //   Optional: clear the form inputs after successful sign-up
    //   emailid.value = "";
    //   phoneNumber.value = "";
    //   password.value = "";
    //   confirmPassword.value = "";

    //   window.location.href = "home.html";
    // });